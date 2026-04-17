"use client";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
    Play, X, ChevronLeft, ChevronRight, ArrowLeft,
    Maximize2, Minimize2, Volume2, Image as ImageIcon, Film,
    ZoomIn, ZoomOut, RotateCw, RefreshCw, Download
} from 'lucide-react';

// ─── Interfaces ───────────────────────────────────────────────────────────────

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

// ─── Constants ────────────────────────────────────────────────────────────────

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.25;

// ─── Main Component ───────────────────────────────────────────────────────────

const Testimonials: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'video' | 'photo'>('video');

    const videoTestimonials: Testimonial[] = [
        { id: 1, title: "Customer Experience 1", url: "https://youtu.be/niX1049o0qo", thumbnail: "https://img.youtube.com/vi/niX1049o0qo/maxresdefault.jpg", type: 'video' },
        { id: 2, title: "Customer Experience 2", url: "https://youtu.be/B1Nu8IwPGKg", thumbnail: "https://img.youtube.com/vi/B1Nu8IwPGKg/maxresdefault.jpg", type: 'video' },
        { id: 3, title: "Quick Review 1", url: "https://youtube.com/shorts/iVhXTYwapPg", thumbnail: "https://img.youtube.com/vi/iVhXTYwapPg/maxresdefault.jpg", type: 'video' },
        { id: 4, title: "Quick Review 2", url: "https://youtube.com/shorts/f-cLk8EU-zM", thumbnail: "https://img.youtube.com/vi/f-cLk8EU-zM/maxresdefault.jpg", type: 'video' },
        { id: 5, title: "Quick Review 3", url: "https://youtube.com/shorts/1hjCjof0IDU", thumbnail: "https://img.youtube.com/vi/1hjCjof0IDU/maxresdefault.jpg", type: 'video' },
        { id: 6, title: "Quick Review 4", url: "https://youtube.com/shorts/WgceUlF6BNo", thumbnail: "https://img.youtube.com/vi/WgceUlF6BNo/maxresdefault.jpg", type: 'video' },
        { id: 7, title: "Quick Review 5", url: "https://youtube.com/shorts/Ah-dHDACaSw", thumbnail: "https://img.youtube.com/vi/Ah-dHDACaSw/maxresdefault.jpg", type: 'video' },
        { id: 8, title: "Detailed Feedback", url: "https://youtu.be/pHDtlsB6eBg", thumbnail: "https://img.youtube.com/vi/pHDtlsB6eBg/maxresdefault.jpg", type: 'video' },
        { id: 9, title: "Quick Review 6", url: "https://youtube.com/shorts/3n1NpYcg63I", thumbnail: "https://img.youtube.com/vi/3n1NpYcg63I/maxresdefault.jpg", type: 'video' },
        { id: 10, title: "Quick Review 7", url: "https://youtube.com/shorts/UM_o7WpR_-4", thumbnail: "https://img.youtube.com/vi/UM_o7WpR_-4/maxresdefault.jpg", type: 'video' },
        { id: 11, title: "Quick Review 8", url: "https://youtube.com/shorts/xuhbSzlek24", thumbnail: "https://img.youtube.com/vi/xuhbSzlek24/maxresdefault.jpg", type: 'video' },
        { id: 12, title: "Quick Review 9", url: "https://youtube.com/shorts/B8gcQ_llFrc", thumbnail: "https://img.youtube.com/vi/B8gcQ_llFrc/maxresdefault.jpg", type: 'video' },
        { id: 13, title: "Quick Review 10", url: "https://youtube.com/shorts/ZkKZiwEjaV8", thumbnail: "https://img.youtube.com/vi/ZkKZiwEjaV8/maxresdefault.jpg", type: 'video' },
        { id: 14, title: "Quick Review 11", url: "https://youtube.com/shorts/xB21rHswP5M", thumbnail: "https://img.youtube.com/vi/xB21rHswP5M/maxresdefault.jpg", type: 'video' },
        { id: 15, title: "Quick Review 12", url: "https://youtu.be/gMPFj5n30DA", thumbnail: "https://img.youtube.com/vi/gMPFj5n30DA/maxresdefault.jpg", type: 'video' },
        { id: 16, title: "Quick Review 13", url: "https://youtu.be/dPmdSnG892Y", thumbnail: "https://img.youtube.com/vi/dPmdSnG892Y/maxresdefault.jpg", type: 'video' },
        { id: 17, title: "Quick Review 14", url: "https://youtu.be/yXl83F8cL4g", thumbnail: "https://img.youtube.com/vi/yXl83F8cL4g/maxresdefault.jpg", type: 'video' },
        { id: 18, title: "Quick Review 15", url: "https://youtu.be/_5lAv1fINMY", thumbnail: "https://img.youtube.com/vi/_5lAv1fINMY/maxresdefault.jpg", type: 'video' },
        { id: 19, title: "Quick Review 16", url: "https://youtu.be/rliul-Zz8ks", thumbnail: "https://img.youtube.com/vi/rliul-Zz8ks/maxresdefault.jpg", type: 'video' },
        { id: 20, title: "Quick Review 17", url: "https://youtu.be/9W7qIBkclJ0", thumbnail: "https://img.youtube.com/vi/9W7qIBkclJ0/maxresdefault.jpg", type: 'video' },
        { id: 21, title: "Quick Review 18", url: "https://youtu.be/0I5X_W0bMkw", thumbnail: "https://img.youtube.com/vi/0I5X_W0bMkw/maxresdefault.jpg", type: 'video' },
        { id: 22, title: "Quick Review 19", url: "https://youtube.com/shorts/8RXQETawjl0", thumbnail: "https://img.youtube.com/vi/8RXQETawjl0/maxresdefault.jpg", type: 'video' },
        { id: 23, title: "Quick Review 20", url: "https://youtube.com/shorts/XDDkOjtB0TQ", thumbnail: "https://img.youtube.com/vi/XDDkOjtB0TQ/maxresdefault.jpg", type: 'video' },
        { id: 24, title: "Quick Review 21", url: "https://youtu.be/dbJUhYpJAHY", thumbnail: "https://img.youtube.com/vi/dbJUhYpJAHY/maxresdefault.jpg", type: 'video' },
        { id: 25, title: "Quick Review 22", url: "https://youtu.be/tKDZDFAdwj4", thumbnail: "https://img.youtube.com/vi/tKDZDFAdwj4/maxresdefault.jpg", type: 'video' },
        { id: 26, title: "Quick Review 23", url: "https://youtu.be/H54nzs704Dk", thumbnail: "https://img.youtube.com/vi/H54nzs704Dk/maxresdefault.jpg", type: 'video' },
        { id: 27, title: "Quick Review 27", url: "https://youtu.be/21FqhXF_mD8", thumbnail: "https://img.youtube.com/vi/21FqhXF_mD8/maxresdefault.jpg", type: 'video' },
        { id: 28, title: "Quick Review 28", url: "https://youtube.com/shorts/QEC18CSFHbk", thumbnail: "https://img.youtube.com/vi/QEC18CSFHbk/maxresdefault.jpg", type: 'video' },
        { id: 29, title: "Quick Review 29", url: "https://youtube.com/shorts/7Wsze4ZmGGo", thumbnail: "https://img.youtube.com/vi/7Wsze4ZmGGo/maxresdefault.jpg", type: 'video' },
        { id: 30, title: "Quick Review 30", url: "https://youtube.com/shorts/SujqFWunof0", thumbnail: "https://img.youtube.com/vi/SujqFWunof0/maxresdefault.jpg", type: 'video' },
        { id: 31, title: "Quick Review 31", url: "https://youtu.be/93fVCbLJ0QQ", thumbnail: "https://img.youtube.com/vi/93fVCbLJ0QQ/maxresdefault.jpg", type: 'video' },
        { id: 32, title: "Quick Review 32", url: "https://youtube.com/shorts/WXIKTvCaxkk", thumbnail: "https://img.youtube.com/vi/WXIKTvCaxkk/maxresdefault.jpg", type: 'video' },



    ];

    const photoTestimonials: PhotoTestimonial[] = [
        { id: 101, imageUrl: "/testimonials/1.png", description: "Absolutely love the product! Best investment I've made this year.", customerName: "Sarah Johnson", rating: 5 },
        { id: 102, imageUrl: "/testimonials/2.jpeg", description: "Our team productivity increased by 200% after implementing this solution.", customerName: "Michael Chen", rating: 5 },
        { id: 103, imageUrl: "/testimonials/3.jpeg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 104, imageUrl: "/testimonials/4.jpeg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 105, imageUrl: "/testimonials/5.jpeg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 106, imageUrl: "/testimonials/6.jpeg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 107, imageUrl: "/testimonials/7.jpeg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 108, imageUrl: "/testimonials/8.jpeg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 109, imageUrl: "/testimonials/9.jpg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 110, imageUrl: "/testimonials/10.jpeg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 111, imageUrl: "/testimonials/11.jpeg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 112, imageUrl: "/testimonials/12.png", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 113, imageUrl: "/testimonials/13.png", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 114, imageUrl: "/testimonials/14.jpg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
        { id: 115, imageUrl: "/testimonials/15.jpg", description: "Transformative experience. Can't imagine working without it now.", customerName: "Robert Martinez", rating: 5 },
    ];
    const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);
    const [selectedPhoto, setSelectedPhoto] = useState<PhotoTestimonial | null>(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (selectedVideo) {
                    if (isFullscreen) setIsFullscreen(false);
                    else closeVideo();
                }
                if (selectedPhoto) closePhoto();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [selectedVideo, selectedPhoto, isFullscreen]);

    useEffect(() => {
        const handleArrowKeys = (e: KeyboardEvent) => {
            if (selectedVideo) {
                if (e.key === 'ArrowRight') navigateVideo('next');
                else if (e.key === 'ArrowLeft') navigateVideo('prev');
            }
        };
        window.addEventListener('keydown', handleArrowKeys);
        return () => window.removeEventListener('keydown', handleArrowKeys);
    }, [selectedVideo, currentVideoIndex]);

    const getVideoId = (url: string): string | null => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\/\s]{11})/);
        return match ? match[1] : null;
    };

    const openVideo = (index: number) => { setSelectedVideo(videoTestimonials[index]); setCurrentVideoIndex(index); setIsFullscreen(false); };
    const closeVideo = () => { setSelectedVideo(null); setIsFullscreen(false); };
    const openPhoto = (index: number) => { setSelectedPhoto(photoTestimonials[index]); setCurrentPhotoIndex(index); };
    const closePhoto = () => setSelectedPhoto(null);

    const navigateVideo = (direction: 'next' | 'prev') => {
        let newIndex = direction === 'next' ? currentVideoIndex + 1 : currentVideoIndex - 1;
        if (newIndex < 0) newIndex = videoTestimonials.length - 1;
        if (newIndex >= videoTestimonials.length) newIndex = 0;
        setSelectedVideo(videoTestimonials[newIndex]);
        setCurrentVideoIndex(newIndex);
    };

    const navigatePhoto = (direction: 'next' | 'prev') => {
        let newIndex = direction === 'next' ? currentPhotoIndex + 1 : currentPhotoIndex - 1;
        if (newIndex < 0) newIndex = photoTestimonials.length - 1;
        if (newIndex >= photoTestimonials.length) newIndex = 0;
        setSelectedPhoto(photoTestimonials[newIndex]);
        setCurrentPhotoIndex(newIndex);
    };

    const totalVideos = videoTestimonials.length;
    const totalPhotos = photoTestimonials.length;

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 mt-22">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Testimonials</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear what our satisfied customers have to say about their experiences
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-lg bg-gray-200 p-1">
                        <button
                            onClick={() => setActiveTab('video')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'video' ? 'bg-white text-red-600 shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            <Film className="w-4 h-4" />
                            Video Testimonials ({videoTestimonials.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('photo')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'photo' ? 'bg-white text-red-600 shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            <ImageIcon className="w-4 h-4" />
                            Written Testimonials ({photoTestimonials.length})
                        </button>
                    </div>
                </div>

                {/* Video Grid */}
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
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 truncate">{testimonial.title}</h3>
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

                {/* Photo Grid */}
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
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 shadow-lg transform group-hover:scale-105 transition-transform">
                                            See Testimonial
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
                        onSelectVideo={(index) => { setSelectedVideo(videoTestimonials[index]); setCurrentVideoIndex(index); }}
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
                        onSelectPhoto={(index) => { setSelectedPhoto(photoTestimonials[index]); setCurrentPhotoIndex(index); }}
                        allPhotos={photoTestimonials}
                    />
                )}
            </div>
        </div>
    );
};

// ─── Video Modal ──────────────────────────────────────────────────────────────

const VideoModal: React.FC<VideoModalProps> = ({
    video, currentIndex, totalVideos, onClose, onNavigate,
    onSelectVideo, allVideos, isFullscreen, onToggleFullscreen
}) => {
    const getVideoId = (url: string): string | null => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\/\s]{11})/);
        return match ? match[1] : null;
    };

    return (
        <>
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={onClose} />
            <div
                className={`fixed z-50 transition-all duration-300 ${isFullscreen
                    ? 'inset-4 md:inset-8 lg:inset-12 xl:inset-16 flex items-center justify-center'
                    : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full ${!isFullscreen && 'max-h-[85vh] overflow-y-auto'}`}>
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-linear-to-b from-black/80 to-transparent">
                        <button onClick={onClose} className="flex items-center gap-2 text-white hover:text-red-500 transition-colors group p-2 hover:bg-white/10 rounded-lg">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium hidden sm:inline">Back to Gallery</span>
                        </button>
                        <div className="flex items-center gap-2">
                            <button onClick={onToggleFullscreen} className="text-white hover:text-red-500 transition-colors p-2 hover:bg-white/10 rounded-lg">
                                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                            </button>
                            <button onClick={onClose} className="text-white hover:text-red-500 transition-colors p-2 hover:bg-white/10 rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Video */}
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
                        <button onClick={() => onNavigate('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors p-3 hover:bg-white/10 rounded-full bg-black/30 backdrop-blur-sm">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={() => onNavigate('next')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors p-3 hover:bg-white/10 rounded-full bg-black/30 backdrop-blur-sm">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Info */}
                    <div className="p-4 bg-gray-900 border-t border-gray-800">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{video.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <Volume2 className="w-4 h-4" />
                                        {video.url.includes('shorts') ? 'Short Video' : 'Full Video'}
                                    </span>
                                    <span>Video {currentIndex + 1} of {totalVideos}</span>
                                </div>
                            </div>
                            <a href={video.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-sm font-medium transition-colors px-4 py-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg">
                                Watch on YouTube
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                        {!isFullscreen && (
                            <div className="mt-4">
                                <div className="flex gap-2 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                                    {allVideos.map((t, index) => {
                                        const vid = getVideoId(t.url);
                                        return (
                                            <button
                                                key={t.id}
                                                onClick={() => onSelectVideo(index)}
                                                className={`shrink-0 w-20 rounded-lg overflow-hidden transition-all duration-200 ${currentIndex === index ? 'ring-2 ring-red-500 scale-105' : 'opacity-70 hover:opacity-100'}`}
                                            >
                                                <img src={`https://img.youtube.com/vi/${vid}/default.jpg`} alt={t.title} className="w-full h-12 object-cover" loading="lazy" />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                        <div className="mt-4 text-center text-xs text-gray-500">
                            <span className="inline-flex items-center gap-4">
                                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">← →</kbd><span>Navigate</span>
                                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">ESC</kbd><span>Close</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// ─── Photo Modal ──────────────────────────────────────────────────────────────

const PhotoModal: React.FC<PhotoModalProps> = ({
    photo, currentIndex, totalPhotos, onClose, onNavigate
}) => {
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [showControls, setShowControls] = useState(true);

    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Reset on photo change
    useEffect(() => {
        setZoom(1);
        setRotation(0);
        setPosition({ x: 0, y: 0 });
    }, [currentIndex]);

    // Auto-hide controls
    const resetHideTimer = useCallback(() => {
        setShowControls(true);
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setShowControls(false), 3000);
    }, []);

    useEffect(() => {
        resetHideTimer();
        return () => { if (hideTimer.current) clearTimeout(hideTimer.current); };
    }, []);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape': onClose(); break;
                case 'ArrowLeft': onNavigate('prev'); break;
                case 'ArrowRight': onNavigate('next'); break;
                case '+': case '=': handleZoomIn(); break;
                case '-': handleZoomOut(); break;
                case '0': handleReset(); break;
                case 'r': case 'R': handleRotate(); break;
                case 'f': case 'F': toggleFullscreen(); break;
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [zoom, rotation]);

    // Fullscreen
    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }, []);

    useEffect(() => {
        const onChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', onChange);
        return () => document.removeEventListener('fullscreenchange', onChange);
    }, []);

    const handleZoomIn = () => setZoom(z => Math.min(MAX_ZOOM, parseFloat((z + ZOOM_STEP).toFixed(2))));
    const handleZoomOut = () => setZoom(z => {
        const next = Math.max(MIN_ZOOM, parseFloat((z - ZOOM_STEP).toFixed(2)));
        if (next <= 1) setPosition({ x: 0, y: 0 });
        return next;
    });
    const handleReset = () => { setZoom(1); setRotation(0); setPosition({ x: 0, y: 0 }); };
    const handleRotate = () => setRotation(r => (r + 90) % 360);

    const handleWheel = useCallback((e: React.WheelEvent) => {
        e.preventDefault();
        resetHideTimer();
        const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
        setZoom(z => {
            const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, parseFloat((z + delta).toFixed(2))));
            if (next <= 1) setPosition({ x: 0, y: 0 });
            return next;
        });
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoom <= 1) return;
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
        e.preventDefault();
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        resetHideTimer();
        if (!isDragging) return;
        setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    };
    const handleMouseUp = () => setIsDragging(false);

    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = photo.imageUrl;
        a.download = photo.description || `photo-${currentIndex + 1}`;
        a.target = '_blank';
        a.click();
    };

    const zoomPercent = Math.round(zoom * 100);

    return (
        <>
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm" onClick={onClose} />

            <div
                ref={containerRef}
                className="fixed inset-4 md:inset-8 lg:inset-12 xl:inset-16 z-50 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div className="relative bg-gray-950 rounded-2xl overflow-hidden shadow-2xl w-full h-full max-w-7xl mx-auto flex flex-col">

                    {/* ── Top Bar ── */}
                    <div className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/90 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <button
                            onClick={onClose}
                            className="flex items-center gap-2 text-white hover:text-red-400 transition-colors group p-2 hover:bg-white/10 rounded-lg"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium hidden sm:inline">Back to Gallery</span>
                        </button>

                        <div className="flex items-center gap-1">
                            <span className="text-white/60 text-xs font-mono mr-2 hidden sm:inline">{zoomPercent}%</span>

                            <button onClick={handleZoomOut} disabled={zoom <= MIN_ZOOM} title="Zoom Out (-)" className="pm-icon-btn" aria-label="Zoom out">
                                <ZoomOut className="w-4 h-4" />
                            </button>
                            <button onClick={handleZoomIn} disabled={zoom >= MAX_ZOOM} title="Zoom In (+)" className="pm-icon-btn" aria-label="Zoom in">
                                <ZoomIn className="w-4 h-4" />
                            </button>

                            <div className="w-px h-5 bg-white/20 mx-1" />

                            <button onClick={handleRotate} title="Rotate (R)" className="pm-icon-btn" aria-label="Rotate">
                                <RotateCw className="w-4 h-4" />
                            </button>
                            <button onClick={handleReset} title="Reset (0)" className="pm-icon-btn" aria-label="Reset">
                                <RefreshCw className="w-4 h-4" />
                            </button>

                            <div className="w-px h-5 bg-white/20 mx-1" />

                            <button onClick={handleDownload} title="Download" className="pm-icon-btn" aria-label="Download">
                                <Download className="w-4 h-4" />
                            </button>
                            <button onClick={toggleFullscreen} title="Fullscreen (F)" className="pm-icon-btn" aria-label="Toggle fullscreen">
                                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                            </button>

                            <div className="w-px h-5 bg-white/20 mx-1" />

                            <button onClick={onClose} className="pm-icon-btn hover:!text-red-400" aria-label="Close">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* ── Image Area ── */}
                    <div
                        className="flex-1 overflow-hidden flex items-center justify-center bg-black/40 select-none"
                        onWheel={handleWheel}
                        style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
                    >
                        {/* Prev */}
                        <button
                            onClick={() => onNavigate('prev')}
                            className={`absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-400 transition-all p-3 hover:bg-white/10 rounded-full bg-black/40 backdrop-blur-sm z-30 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            aria-label="Previous photo"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Next */}
                        <button
                            onClick={() => onNavigate('next')}
                            className={`absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-400 transition-all p-3 hover:bg-white/10 rounded-full bg-black/40 backdrop-blur-sm z-30 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            aria-label="Next photo"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <img
                            ref={imgRef}
                            src={photo.imageUrl}
                            alt={photo.description || 'Testimonial photo'}
                            draggable={false}
                            onMouseDown={handleMouseDown}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom}) rotate(${rotation}deg)`,
                                transition: isDragging ? 'none' : 'transform 0.15s ease',
                                willChange: 'transform',
                                userSelect: 'none',
                            }}
                        />
                    </div>

                    {/* ── Bottom Bar ── */}
                    <div className={`absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <div className="flex items-center justify-between gap-4">
                            {/* Zoom slider */}
                            <div className="flex items-center gap-3">
                                <span className="text-white/50 text-xs hidden sm:inline">Zoom</span>
                                <input
                                    type="range"
                                    min={MIN_ZOOM * 100}
                                    max={MAX_ZOOM * 100}
                                    value={zoomPercent}
                                    onChange={(e) => {
                                        const val = Number(e.target.value) / 100;
                                        setZoom(val);
                                        if (val <= 1) setPosition({ x: 0, y: 0 });
                                    }}
                                    className="w-24 sm:w-36 cursor-pointer"
                                    style={{ accentColor: '#ef4444' }}
                                />
                                <span className="text-white/60 text-xs font-mono w-12">{zoomPercent}%</span>
                            </div>

                            {/* Counter */}
                            <div className="text-sm text-gray-400">
                                {currentIndex + 1} / {totalPhotos}
                            </div>

                            {/* Keyboard hints */}
                            <div className="text-white/30 text-xs hidden lg:flex gap-3">
                                <span>← → Navigate</span>
                                <span>+/- Zoom</span>
                                <span>R Rotate</span>
                                <span>F Fullscreen</span>
                                <span>0 Reset</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .pm-icon-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    transition: all 0.15s;
                }
                .pm-icon-btn:hover {
                    background: rgba(255,255,255,0.1);
                    color: #f87171;
                }
                .pm-icon-btn:disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                }
                .pm-icon-btn:disabled:hover {
                    background: transparent;
                    color: white;
                }
            `}</style>
        </>
    );
};

export default Testimonials;