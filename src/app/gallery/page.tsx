"use client";
import React, { useState, useEffect } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Maximize2, Minimize2, Video, Image as ImageIcon, Loader, Flame, Zap, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface GalleryItem {
    id: number;
    type: 'image' | 'video';
    src: string;
    title: string;
    description?: string;
}

const Gallery = () => {
    // Generate gallery items from 1.jpg to 19.jpg and the video at the end
    const galleryItems: GalleryItem[] = [
        ...Array.from({ length: 19 }, (_, i) => ({
            id: i + 1,
            type: 'image' as const,
            src: `/gallery/${i + 1}.jpg`,
            title: `Gallery Image ${i + 1}`,
            description: `Beautiful moment captured in our gallery ${i + 1}`
        })),
        {
            id: 20,
            type: 'video' as const,
            src: '/gallery/firstwalk.mp4',
            title: 'First Fire Walk',
            description: 'Watch our first incredible fire walk experience'
        }
    ];

    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [videoLoading, setVideoLoading] = useState<boolean>(false);

    // Filter items by type
    const allImages = galleryItems.filter(item => item.type === 'image');
    const firewalkVideo = galleryItems.find(item => item.title === 'First Fire Walk');

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedItem) {
                if (isFullscreen) {
                    setIsFullscreen(false);
                } else {
                    closeLightbox();
                }
            }
            if (e.key === 'f' && selectedItem) {
                e.preventDefault();
                setIsFullscreen(!isFullscreen);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [selectedItem, isFullscreen]);

    // Handle arrow keys for navigation
    useEffect(() => {
        const handleArrowKeys = (e: KeyboardEvent) => {
            if (!selectedItem) return;

            if (e.key === 'ArrowRight') {
                navigateItem('next');
            } else if (e.key === 'ArrowLeft') {
                navigateItem('prev');
            }
        };

        window.addEventListener('keydown', handleArrowKeys);
        return () => window.removeEventListener('keydown', handleArrowKeys);
    }, [selectedItem, currentIndex]);

    const openLightbox = (index: number): void => {
        setSelectedItem(galleryItems[index]);
        setCurrentIndex(index);
        setIsFullscreen(false);
        if (galleryItems[index].type === 'video') {
            setVideoLoading(true);
        }
    };

    const closeLightbox = (): void => {
        setSelectedItem(null);
        setIsFullscreen(false);
        setVideoLoading(false);
    };

    const navigateItem = (direction: 'next' | 'prev'): void => {
        let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

        if (newIndex < 0) newIndex = galleryItems.length - 1;
        if (newIndex >= galleryItems.length) newIndex = 0;

        const newItem = galleryItems[newIndex];
        setSelectedItem(newItem);
        setCurrentIndex(newIndex);

        if (newItem.type === 'video') {
            setVideoLoading(true);
        } else {
            setVideoLoading(false);
        }
    };

    const handleSelectItem = (index: number): void => {
        setSelectedItem(galleryItems[index]);
        setCurrentIndex(index);
    };

    const handleVideoLoaded = () => {
        setVideoLoading(false);
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 mt-22">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Our Gallery
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our collection of memorable moments and experiences
                    </p>
                </div>

                {/* Gallery Grid Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8 mt">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <ImageIcon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Photo Gallery</h2>
                                <p className="text-gray-600 text-sm">{allImages.length} beautiful images</p>
                            </div>
                        </div>
                        <span className="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full font-medium">
                            Scroll to explore ↓
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {allImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                onClick={() => {
                                    const imageIndex = galleryItems.findIndex(item => item.id === image.id);
                                    openLightbox(imageIndex);
                                }}
                            >
                                {/* Image Container */}
                                <div className="relative aspect-square overflow-hidden bg-gray-50">
                                    {loading && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Loader className="w-8 h-8 text-blue-500 animate-spin" />
                                        </div>
                                    )}
                                    <Image
                                        src={image.src}
                                        alt={image.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className={`object-cover transition-all duration-500 group-hover:scale-110 ${loading ? 'opacity-0' : 'opacity-100'}`}
                                        onLoad={() => setLoading(false)}
                                        loading="lazy"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Hover Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-white font-bold mb-1">{image.title}</h3>
                                        <p className="text-gray-200 text-sm">{image.description}</p>
                                    </div>

                                    {/* Image Number Badge */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-bold px-3 py-1.5 rounded-full shadow-md">
                                        #{image.id.toString().padStart(2, '0')}
                                    </div>

                                    {/* View Button */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                                            View →
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Info */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                                    <p className="text-gray-600 text-sm truncate">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}

                {/* Special Fire Walk Video Section - At the Bottom */}
                {firewalkVideo && (
                    <div className="mt-8 mb-8">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center gap-3 mb-4">
                                <div className="p-2 bg-red-50 rounded-lg">
                                    <Flame className="w-6 h-6 text-red-600 animate-pulse" />
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900">First Fire Walk</h2>
                                <div className="p-2 bg-orange-50 rounded-lg">
                                    <Sparkles className="w-6 h-6 text-orange-600" />
                                </div>
                            </div>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Experience the thrill and excitement of our first fire walk adventure.
                                Watch this special video showcasing incredible courage and teamwork.
                            </p>
                        </div>

                        <div
                            className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl cursor-pointer group transform hover:scale-[1.005] transition-transform duration-300"
                            onClick={() => {
                                const videoIndex = galleryItems.findIndex(item => item.type === 'video');
                                openLightbox(videoIndex);
                            }}
                        >
                            {/* Video Container with White Border */}
                            <div className="relative aspect-video bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-1">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                                    <video
                                        src={firewalkVideo.src}
                                        className="w-full h-full object-cover"
                                        preload="metadata"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl group-hover:shadow-red-500/50">
                                            <Play className="w-12 h-12 text-white ml-2" fill="white" />
                                        </div>
                                    </div>

                                    {/* Video Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div>
                                                <h3 className="text-3xl font-bold text-white mb-2">{firewalkVideo.title}</h3>
                                                <p className="text-gray-200 text-lg">{firewalkVideo.description}</p>
                                            </div>
                                            <div className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                                                <div className="p-2 bg-white/20 rounded-lg">
                                                    <Video className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <div className="text-white font-bold">Watch Video</div>
                                                    <div className="text-gray-300 text-sm">Click to play</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-4 left-4">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white text-sm font-bold rounded-full">
                                            <Zap className="w-4 h-4" fill="white" />
                                            Special Feature
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Bar */}

                        </div>

                        {/* Video Description */}
                        <div className="max-w-3xl mx-auto mt-8 text-center">
                            <div className="inline-block bg-gradient-to-r from-red-50 to-orange-50 px-6 py-4 rounded-xl border border-red-100">
                                <p className="text-gray-700 italic">
                                    "This fire walk represents the pinnacle of courage and determination.
                                    Watch as our team demonstrates incredible bravery in this unforgettable experience."
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Lightbox Modal */}
                {selectedItem && (
                    <>
                        {/* Modal Backdrop */}
                        <div
                            className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-300 ${isFullscreen ? 'opacity-100' : 'opacity-100'
                                }`}
                            onClick={closeLightbox}
                        />

                        {/* Lightbox Container */}
                        <div
                            className={`fixed z-50 transition-all duration-300 ${isFullscreen
                                ? 'inset-4 md:inset-8 lg:inset-12 xl:inset-16 flex items-center justify-center'
                                : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-6xl'
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full ${!isFullscreen && 'max-h-[90vh] overflow-y-auto'
                                }`}>
                                {/* Header with Controls */}
                                <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/90 to-transparent">
                                    <div className="flex items-center gap-3">
                                        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${selectedItem.type === 'video'
                                            ? 'bg-red-500/90'
                                            : 'bg-blue-500/90'
                                            }`}>
                                            {selectedItem.type === 'video' ? (
                                                <Video className="w-4 h-4 text-white" />
                                            ) : (
                                                <ImageIcon className="w-4 h-4 text-white" />
                                            )}
                                            <span className="text-white text-sm font-medium">
                                                {selectedItem.type === 'video' ? 'Video' : 'Image'} {currentIndex + 1} of {galleryItems.length}
                                            </span>
                                        </div>
                                        <h3 className="text-white font-semibold truncate max-w-xs">
                                            {selectedItem.title}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setIsFullscreen(!isFullscreen)}
                                            className="text-white hover:text-yellow-300 transition-colors p-2 hover:bg-white/20 rounded-lg"
                                            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                                        >
                                            {isFullscreen ? (
                                                <Minimize2 className="w-5 h-5" />
                                            ) : (
                                                <Maximize2 className="w-5 h-5" />
                                            )}
                                        </button>

                                        <button
                                            onClick={closeLightbox}
                                            className="text-white hover:text-red-300 transition-colors p-2 hover:bg-white/20 rounded-lg"
                                            aria-label="Close lightbox"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Media Container */}
                                <div className={`relative ${isFullscreen ? 'h-[calc(100vh-8rem)]' : 'aspect-video'}`}>
                                    {videoLoading && selectedItem.type === 'video' && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-white">
                                            <Loader className="w-12 h-12 text-blue-500 animate-spin" />
                                        </div>
                                    )}

                                    {selectedItem.type === 'image' ? (
                                        <div className="w-full h-full flex items-center justify-center bg-white">
                                            <Image
                                                src={selectedItem.src}
                                                alt={selectedItem.title}
                                                fill
                                                className="object-contain"
                                                sizes="100vw"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-black">
                                            <video
                                                src={selectedItem.src}
                                                className="w-full h-full object-contain"
                                                controls
                                                autoPlay
                                                onLoadedData={handleVideoLoaded}
                                            />
                                        </div>
                                    )}

                                    {/* Navigation Buttons */}
                                    <button
                                        onClick={() => navigateItem('prev')}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-300 transition-colors p-3 hover:bg-black/50 rounded-full bg-black/30 backdrop-blur-sm border border-gray-300/30"
                                        aria-label="Previous item"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>

                                    <button
                                        onClick={() => navigateItem('next')}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-300 transition-colors p-3 hover:bg-black/50 rounded-full bg-black/30 backdrop-blur-sm border border-gray-300/30"
                                        aria-label="Next item"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Media Info */}
                                <div className="p-6 bg-white border-t border-gray-200">
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {selectedItem.title}
                                            </h3>
                                            {selectedItem.description && (
                                                <p className="text-gray-700">
                                                    {selectedItem.description}
                                                </p>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                                                {selectedItem.type === 'video' ? (
                                                    <>
                                                        <Video className="w-4 h-4 text-red-500" />
                                                        <span className="font-medium">Video File</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <ImageIcon className="w-4 h-4 text-blue-500" />
                                                        <span className="font-medium">Image File</span>
                                                    </>
                                                )}
                                            </span>
                                            <span className="text-gray-400">•</span>
                                            <span className="font-medium">Item {currentIndex + 1} of {galleryItems.length}</span>
                                        </div>
                                    </div>

                                    {/* Thumbnail Strip */}
                                    {!isFullscreen && (
                                        <div className="mt-6">
                                            <div className="flex gap-3 overflow-x-auto py-3 px-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                                {galleryItems.map((item, index) => (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => handleSelectItem(index)}
                                                        className={`shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-200 shadow-md ${currentIndex === index
                                                            ? 'ring-2 ring-blue-500 transform scale-105'
                                                            : 'opacity-70 hover:opacity-100 hover:shadow-lg'
                                                            }`}
                                                        aria-label={`View ${item.title}`}
                                                    >
                                                        {item.type === 'image' ? (
                                                            <div className="relative w-full h-full">
                                                                <Image
                                                                    src={item.src}
                                                                    alt={item.title}
                                                                    fill
                                                                    className="object-cover"
                                                                    sizes="80px"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="relative w-full h-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center">
                                                                <Video className="w-8 h-8 text-white" />
                                                            </div>
                                                        )}
                                                        {item.type === 'video' && (
                                                            <div className="absolute bottom-1 right-1">
                                                                <div className="bg-white/90 text-gray-900 text-xs px-1.5 py-0.5 rounded font-bold">
                                                                    VID
                                                                </div>
                                                            </div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Footer Note */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-600">
                        All images and videos are captured with professional equipment.
                        <span className="text-blue-600 font-medium ml-1">Scroll up to view all gallery items.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;


