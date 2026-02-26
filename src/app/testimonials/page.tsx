"use client";
import React, { useState, useEffect } from 'react';
import { Play, X, ChevronLeft, ChevronRight, ArrowLeft, Maximize2, Minimize2, Volume2, Image as ImageIcon, Film } from 'lucide-react';

// Interfaces
interface Testimonial {
    id: number;
    title: string;
    url: string;
    thumbnail: string;
    type: 'video' | 'photo';
}

interface PhotoTestimonial {
    id: number;
    imageUrl: string;
    description?: string;
    customerName?: string;
    rating?: number;
}

interface VideoModalProps {
    video: Testimonial;
    currentIndex: number;
    totalVideos: number;
    onClose: () => void;
    onNavigate: (direction: 'next' | 'prev') => void;
    onSelectVideo: (index: number) => void;
    allVideos: Testimonial[];
    isFullscreen: boolean;
    onToggleFullscreen: () => void;
}

interface PhotoModalProps {
    photo: PhotoTestimonial;
    currentIndex: number;
    totalPhotos: number;
    onClose: () => void;
    onNavigate: (direction: 'next' | 'prev') => void;
    onSelectPhoto: (index: number) => void;
    allPhotos: PhotoTestimonial[];
}

const Testimonials: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'video' | 'photo'>('video');

    // Video testimonials
    const videoTestimonials: Testimonial[] = [
        {
            id: 1,
            title: "Customer Experience 1",
            url: "https://youtu.be/niX1049o0qo",
            thumbnail: "https://img.youtube.com/vi/niX1049o0qo/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 2,
            title: "Customer Experience 2",
            url: "https://youtu.be/B1Nu8IwPGKg",
            thumbnail: "https://img.youtube.com/vi/B1Nu8IwPGKg/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 3,
            title: "Quick Review 1",
            url: "https://youtube.com/shorts/iVhXTYwapPg",
            thumbnail: "https://img.youtube.com/vi/iVhXTYwapPg/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 4,
            title: "Quick Review 2",
            url: "https://youtube.com/shorts/f-cLk8EU-zM",
            thumbnail: "https://img.youtube.com/vi/f-cLk8EU-zM/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 5,
            title: "Quick Review 3",
            url: "https://youtube.com/shorts/1hjCjof0IDU",
            thumbnail: "https://img.youtube.com/vi/1hjCjof0IDU/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 6,
            title: "Quick Review 4",
            url: "https://youtube.com/shorts/WgceUlF6BNo",
            thumbnail: "https://img.youtube.com/vi/WgceUlF6BNo/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 7,
            title: "Quick Review 5",
            url: "https://youtube.com/shorts/Ah-dHDACaSw",
            thumbnail: "https://img.youtube.com/vi/Ah-dHDACaSw/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 8,
            title: "Detailed Feedback",
            url: "https://youtu.be/pHDtlsB6eBg",
            thumbnail: "https://img.youtube.com/vi/pHDtlsB6eBg/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 9,
            title: "Quick Review 6",
            url: "https://youtube.com/shorts/3n1NpYcg63I",
            thumbnail: "https://img.youtube.com/vi/3n1NpYcg63I/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 10,
            title: "Quick Review 7",
            url: "https://youtube.com/shorts/UM_o7WpR_-4",
            thumbnail: "https://img.youtube.com/vi/UM_o7WpR_-4/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 11,
            title: "Quick Review 8",
            url: "https://youtube.com/shorts/xuhbSzlek24",
            thumbnail: "https://img.youtube.com/vi/xuhbSzlek24/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 12,
            title: "Quick Review 9",
            url: "https://youtube.com/shorts/B8gcQ_llFrc",
            thumbnail: "https://img.youtube.com/vi/B8gcQ_llFrc/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 13,
            title: "Quick Review 10",
            url: "https://youtube.com/shorts/ZkKZiwEjaV8",
            thumbnail: "https://img.youtube.com/vi/ZkKZiwEjaV8/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 14,
            title: "Quick Review 11",
            url: "https://youtube.com/shorts/xB21rHswP5M",
            thumbnail: "https://img.youtube.com/vi/xB21rHswP5M/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 15,
            title: "Quick Review 12",
            url: "https://youtu.be/gMPFj5n30DA",
            thumbnail: "https://img.youtube.com/vi/gMPFj5n30DA/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 16,
            title: "Quick Review 13",
            url: "https://youtu.be/dPmdSnG892Y",
            thumbnail: "https://img.youtube.com/vi/dPmdSnG892Y/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 17,
            title: "Quick Review 14",
            url: "https://youtu.be/yXl83F8cL4g",
            thumbnail: "https://img.youtube.com/vi/yXl83F8cL4g/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 18,
            title: "Quick Review 15",
            url: "https://youtu.be/_5lAv1fINMY",
            thumbnail: "https://img.youtube.com/vi/_5lAv1fINMY/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 19,
            title: "Quick Review 16",
            url: "https://youtu.be/rliul-Zz8ks",
            thumbnail: "https://img.youtube.com/vi/rliul-Zz8ks/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 20,
            title: "Quick Review 17",
            url: "https://youtu.be/9W7qIBkclJ0",
            thumbnail: "https://img.youtube.com/vi/9W7qIBkclJ0/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 21,
            title: "Quick Review 18",
            url: "https://youtu.be/0I5X_W0bMkw",
            thumbnail: "https://img.youtube.com/vi/0I5X_W0bMkw/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 22,
            title: "Quick Review 19",
            url: "https://youtube.com/shorts/8RXQETawjl0",
            thumbnail: "https://img.youtube.com/vi/8RXQETawjl0/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 23,
            title: "Quick Review 20",
            url: "https://youtube.com/shorts/XDDkOjtB0TQ",
            thumbnail: "https://img.youtube.com/vi/XDDkOjtB0TQ/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 24,
            title: "Quick Review 21",
            url: "https://youtu.be/dbJUhYpJAHY",
            thumbnail: "https://img.youtube.com/vi/dbJUhYpJAHY/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 25,
            title: "Quick Review 22",
            url: "https://youtu.be/tKDZDFAdwj4",
            thumbnail: "https://img.youtube.com/vi/tKDZDFAdwj4/maxresdefault.jpg",
            type: 'video'
        },
        {
            id: 26,
            title: "Quick Review 23",
            url: "https://youtu.be/H54nzs704Dk",
            thumbnail: "https://img.youtube.com/vi/H54nzs704Dk/maxresdefault.jpg",
            type: 'video'
        }
    ];

    // Photo testimonials (sample data - replace with your actual photos)
    const photoTestimonials: PhotoTestimonial[] = [
        {
            id: 101,
            imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
            description: "Absolutely love the product! Best investment I've made this year.",
            customerName: "Sarah Johnson",
            rating: 5
        },
        {
            id: 102,
            imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
            description: "Our team productivity increased by 200% after implementing this solution.",
            customerName: "Michael Chen",
            rating: 5
        },
        {
            id: 103,
            imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
            description: "Perfect addition to our workspace. Highly recommended!",
            customerName: "Emily Rodriguez",
            rating: 4
        },
        {
            id: 104,
            imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
            description: "Outstanding service and quality. Will definitely purchase again.",
            customerName: "David Kim",
            rating: 5
        },
        {
            id: 105,
            imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
            description: "Exceeded all my expectations. The quality is amazing!",
            customerName: "Lisa Thompson",
            rating: 5
        },
        {
            id: 106,
            imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
            description: "Game-changer for our daily operations. So easy to use!",
            customerName: "James Wilson",
            rating: 4
        },
        {
            id: 107,
            imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
            description: "The support team is incredible. They went above and beyond!",
            customerName: "Amara Okonkwo",
            rating: 5
        },
        {
            id: 108,
            imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
            description: "Transformative experience. Can't imagine working without it now.",
            customerName: "Robert Martinez",
            rating: 5
        }
    ];

    const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);
    const [selectedPhoto, setSelectedPhoto] = useState<PhotoTestimonial | null>(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (selectedVideo) {
                    if (isFullscreen) {
                        setIsFullscreen(false);
                    } else {
                        closeVideo();
                    }
                }
                if (selectedPhoto) {
                    closePhoto();
                }
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [selectedVideo, selectedPhoto, isFullscreen]);

    // Handle arrow keys for navigation
    useEffect(() => {
        const handleArrowKeys = (e: KeyboardEvent) => {
            if (selectedVideo) {
                if (e.key === 'ArrowRight') {
                    navigateVideo('next');
                } else if (e.key === 'ArrowLeft') {
                    navigateVideo('prev');
                }
            } else if (selectedPhoto) {
                if (e.key === 'ArrowRight') {
                    navigatePhoto('next');
                } else if (e.key === 'ArrowLeft') {
                    navigatePhoto('prev');
                }
            }
        };

        window.addEventListener('keydown', handleArrowKeys);
        return () => window.removeEventListener('keydown', handleArrowKeys);
    }, [selectedVideo, selectedPhoto, currentVideoIndex, currentPhotoIndex]);

    const getVideoId = (url: string): string | null => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\/\s]{11})/);
        return match ? match[1] : null;
    };

    const openVideo = (index: number): void => {
        setSelectedVideo(videoTestimonials[index]);
        setCurrentVideoIndex(index);
        setIsFullscreen(false);
    };

    const closeVideo = (): void => {
        setSelectedVideo(null);
        setIsFullscreen(false);
    };

    const openPhoto = (index: number): void => {
        setSelectedPhoto(photoTestimonials[index]);
        setCurrentPhotoIndex(index);
    };

    const closePhoto = (): void => {
        setSelectedPhoto(null);
    };

    const navigateVideo = (direction: 'next' | 'prev'): void => {
        let newIndex = direction === 'next' ? currentVideoIndex + 1 : currentVideoIndex - 1;

        if (newIndex < 0) newIndex = videoTestimonials.length - 1;
        if (newIndex >= videoTestimonials.length) newIndex = 0;

        setSelectedVideo(videoTestimonials[newIndex]);
        setCurrentVideoIndex(newIndex);
    };

    const navigatePhoto = (direction: 'next' | 'prev'): void => {
        let newIndex = direction === 'next' ? currentPhotoIndex + 1 : currentPhotoIndex - 1;

        if (newIndex < 0) newIndex = photoTestimonials.length - 1;
        if (newIndex >= photoTestimonials.length) newIndex = 0;

        setSelectedPhoto(photoTestimonials[newIndex]);
        setCurrentPhotoIndex(newIndex);
    };

    const handleSelectVideo = (index: number): void => {
        setSelectedVideo(videoTestimonials[index]);
        setCurrentVideoIndex(index);
    };

    const handleSelectPhoto = (index: number): void => {
        setSelectedPhoto(photoTestimonials[index]);
        setCurrentPhotoIndex(index);
    };

    const totalVideos = videoTestimonials.length;
    const totalPhotos = photoTestimonials.length;

    // Render stars for rating


    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 mt-22">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Customer Testimonials
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear what our satisfied customers have to say about their experiences
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-lg bg-gray-200 p-1">
                        <button
                            onClick={() => setActiveTab('video')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'video'
                                ? 'bg-white text-red-600 shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            <Film className="w-4 h-4" />
                            Video Testimonials ({totalVideos})
                        </button>
                        <button
                            onClick={() => setActiveTab('photo')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'photo'
                                ? 'bg-white text-red-600 shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            <ImageIcon className="w-4 h-4" />
                            Photo Testimonials ({totalPhotos})
                        </button>
                    </div>
                </div>

                {/* Video Testimonials Grid */}
                {activeTab === 'video' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {videoTestimonials.map((testimonial, index) => {
                            const videoId = getVideoId(testimonial.url);
                            return (
                                <div
                                    key={testimonial.id}
                                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                                    onClick={() => openVideo(index)}
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                                            alt={testimonial.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 truncate">
                                            {testimonial.title}
                                        </h3>
                                        <div className="flex items-center mt-2">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                                                {testimonial.url.includes('shorts') ? 'Short Video' : 'Full Video'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Photo Testimonials Grid */}
                {activeTab === 'photo' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {photoTestimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                                onClick={() => openPhoto(index)}
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        src={testimonial.imageUrl}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* View Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 shadow-lg transform group-hover:scale-105 transition-transform">
                                            View Photo
                                        </div>
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                )}

                {/* Video Modal */}
                {selectedVideo && (
                    <VideoModal
                        video={selectedVideo}
                        currentIndex={currentVideoIndex}
                        totalVideos={videoTestimonials.length}
                        onClose={closeVideo}
                        onNavigate={navigateVideo}
                        onSelectVideo={handleSelectVideo}
                        allVideos={videoTestimonials}
                        isFullscreen={isFullscreen}
                        onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
                    />
                )}

                {/* Photo Modal */}
                {selectedPhoto && (
                    <PhotoModal
                        photo={selectedPhoto}
                        currentIndex={currentPhotoIndex}
                        totalPhotos={photoTestimonials.length}
                        onClose={closePhoto}
                        onNavigate={navigatePhoto}
                        onSelectPhoto={handleSelectPhoto}
                        allPhotos={photoTestimonials}
                    />
                )}


            </div>
        </div>
    );
};

// Video Modal Component
const VideoModal: React.FC<VideoModalProps> = ({
    video,
    currentIndex,
    totalVideos,
    onClose,
    onNavigate,
    onSelectVideo,
    allVideos,
    isFullscreen,
    onToggleFullscreen
}) => {
    const getVideoId = (url: string): string | null => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\/\s]{11})/);
        return match ? match[1] : null;
    };

    return (
        <>
            {/* Modal Backdrop */}
            <div
                className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-all duration-300 ${isFullscreen ? 'opacity-100' : 'opacity-100'
                    }`}
                onClick={onClose}
            />

            {/* Video Modal Container */}
            <div
                className={`fixed z-50 transition-all duration-300 ${isFullscreen
                    ? 'inset-4 md:ins-8 lg:inset-12 xl:inset-16 flex items-center justify-center'
                    : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full ${!isFullscreen && 'max-h-[85vh] overflow-y-auto'
                    }`}>
                    {/* Header with Controls */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-linear-to-b from-black/80 to-transparent">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={onClose}
                                className="flex items-center gap-2 text-white hover:text-red-500 transition-colors group p-2 hover:bg-white/10 rounded-lg"
                                aria-label="Go back"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium hidden sm:inline">Back to Gallery</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={onToggleFullscreen}
                                className="text-white hover:text-red-500 transition-colors p-2 hover:bg-white/10 rounded-lg"
                                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                            >
                                {isFullscreen ? (
                                    <Minimize2 className="w-5 h-5" />
                                ) : (
                                    <Maximize2 className="w-5 h-5" />
                                )}
                            </button>

                            <button
                                onClick={onClose}
                                className="text-white hover:text-red-500 transition-colors p-2 hover:bg-white/10 rounded-lg"
                                aria-label="Close video"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Video Container */}
                    <div className={`relative ${isFullscreen ? 'h-[calc(100vh-8rem)]' : 'aspect-video'}`}>
                        <div className="w-full h-full bg-black">
                            <iframe
                                src={`https://www.youtube.com/embed/${getVideoId(video.url)}?autoplay=1&rel=0&modestbranding=1`}
                                className="w-full h-full"
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                frameBorder="0"
                            />
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={() => onNavigate('prev')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors p-3 hover:bg-white/10 rounded-full bg-black/30 backdrop-blur-sm"
                            aria-label="Previous video"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={() => onNavigate('next')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors p-3 hover:bg-white/10 rounded-full bg-black/30 backdrop-blur-sm"
                            aria-label="Next video"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Video Info */}
                    <div className="p-4 bg-gray-900 border-t border-gray-800">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                                    {video.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <Volume2 className="w-4 h-4" />
                                        {video.url.includes('shorts') ? 'Short Video' : 'Full Video'}
                                    </span>
                                    <span>
                                        Video {currentIndex + 1} of {totalVideos}
                                    </span>
                                </div>
                            </div>

                            <a
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-sm font-medium transition-colors px-4 py-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg"
                            >
                                Watch on YouTube
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        {/* Thumbnail Strip */}
                        {!isFullscreen && (
                            <div className="mt-4">
                                <div className="flex gap-2 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                                    {allVideos.map((testimonial, index) => {
                                        const videoId = getVideoId(testimonial.url);
                                        return (
                                            <button
                                                key={testimonial.id}
                                                onClick={() => onSelectVideo(index)}
                                                className={`shrink-0 w-20 rounded-lg overflow-hidden transition-all duration-200 ${currentIndex === index
                                                    ? 'ring-2 ring-red-500 transform scale-105'
                                                    : 'opacity-70 hover:opacity-100'
                                                    }`}
                                                aria-label={`Play ${testimonial.title}`}
                                            >
                                                <img
                                                    src={`https://img.youtube.com/vi/${videoId}/default.jpg`}
                                                    alt={testimonial.title}
                                                    className="w-full h-12 object-cover"
                                                    loading="lazy"
                                                />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Keyboard Shortcuts Hint */}
                        <div className="mt-4 text-center text-xs text-gray-500">
                            <span className="inline-flex items-center gap-4">
                                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">← →</kbd>
                                <span>Navigate</span>
                                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">F</kbd>
                                <span>Fullscreen</span>
                                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">ESC</kbd>
                                <span>Close</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Photo Modal Component
const PhotoModal: React.FC<PhotoModalProps> = ({
    photo,
    currentIndex,
    totalPhotos,
    onClose,
    onNavigate,
    onSelectPhoto,
    allPhotos
}) => {
    // Render stars for rating
    const renderStars = (rating: number) => {
        return Array(5).fill(0).map((_, i) => (
            <>
            </>
        ));
    };

    return (
        <>


            {/* Photo Modal Container */}
            <div
                className="fixed inset-4 md:inset-8 lg:inset-12 xl:inset-16 z-50 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full h-full max-w-7xl mx-auto flex flex-col">
                    {/* Header with Controls */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-linear-to-b from-black/80 to-transparent">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={onClose}
                                className="flex items-center gap-2 text-white hover:text-red-500 transition-colors group p-2 hover:bg-white/10 rounded-lg"
                                aria-label="Go back"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium hidden sm:inline">Back to Gallery</span>
                            </button>
                        </div>

                        <button
                            onClick={onClose}
                            className="text-white hover:text-red-500 transition-colors p-2 hover:bg-white/10 rounded-lg"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-black/50">
                        {/* Navigation Buttons */}
                        <button
                            onClick={() => onNavigate('prev')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors p-3 hover:bg-white/10 rounded-full bg-black/30 backdrop-blur-sm z-10"
                            aria-label="Previous photo"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Photo Container */}
                        <div className="relative max-h-full max-w-full">
                            <img
                                src={photo.imageUrl}
                                alt={photo.description}
                                className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
                            />
                        </div>

                        <button
                            onClick={() => onNavigate('next')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors p-3 hover:bg-white/10 rounded-full bg-black/30 backdrop-blur-sm z-10"
                            aria-label="Next photo"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Photo Info */}
                    <div className="p-6 bg-gray-900 border-t border-gray-800">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">


                            <div className="text-sm text-gray-500">
                                Photo {currentIndex + 1} of {totalPhotos}
                            </div>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="mt-6">
                            <div className="flex gap-2 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                                {allPhotos.map((testimonial, index) => (
                                    <button
                                        key={testimonial.id}
                                        onClick={() => onSelectPhoto(index)}
                                        className={`shrink-0 w-20 rounded-lg overflow-hidden transition-all duration-200 ${currentIndex === index
                                            ? 'ring-2 ring-red-500 transform scale-105'
                                            : 'opacity-70 hover:opacity-100'
                                            }`}
                                        aria-label={`View ${testimonial.description}`}
                                    >
                                        <img
                                            src={testimonial.imageUrl}
                                            className="w-full h-12 object-cover"
                                            loading="lazy"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Keyboard Shortcuts Hint */}
                        <div className="mt-4 text-center text-xs text-gray-500">
                            <span className="inline-flex items-center gap-4">
                                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">← →</kbd>
                                <span>Navigate</span>
                                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">ESC</kbd>
                                <span>Close</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials; 