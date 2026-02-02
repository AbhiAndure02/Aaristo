"use client";

import { useEffect, useState } from "react";
import { Instagram, Play, Heart, MessageCircle, Send, Clock } from "lucide-react";

type Props = {
    url: string;
};

declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            };
        };
    }
}

export default function InstagramReel({ url }: Props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showFallback, setShowFallback] = useState(false);
    const postId = url.split('/').filter(Boolean).pop() || '';

    useEffect(() => {
        // Load Instagram embed script
        const loadInstagramScript = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
                setIsLoaded(true);
                return;
            }

            const scriptId = 'instagram-embed-script';
            if (document.getElementById(scriptId)) {
                // Script already exists, wait for it to load
                const checkInterval = setInterval(() => {
                    if (window.instgrm) {
                        window.instgrm.Embeds.process();
                        setIsLoaded(true);
                        clearInterval(checkInterval);
                    }
                }, 100);
                return;
            }

            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            script.onload = () => {
                if (window.instgrm) {
                    window.instgrm.Embeds.process();
                    setIsLoaded(true);
                }
            };
            script.onerror = () => {
                setShowFallback(true);
            };
            document.body.appendChild(script);
        };

        // Add a small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            loadInstagramScript();
        }, 100);

        // Set a timeout to show fallback if embed doesn't load
        const fallbackTimer = setTimeout(() => {
            if (!isLoaded) {
                setShowFallback(true);
            }
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearTimeout(fallbackTimer);
        };
    }, [url, isLoaded]);

    // Function to extract video ID from URL (for fallback)
    const extractVideoId = (url: string) => {
        const match = url.match(/\/p\/([^/]+)/);
        return match ? match[1] : 'default';
    };

    return (
        <div className="w-full flex justify-center">
            {showFallback ? (
                <div className="w-full max-w-[540px]">
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                                    <Instagram size={16} className="text-white" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-sm font-semibold text-gray-900">aaristo_consulting</div>
                                    <div className="text-xs text-gray-500">Instagram Reel</div>
                                </div>
                            </div>
                            <div className="text-gray-400 text-sm">
                                <Clock size={14} />
                            </div>
                        </div>

                        {/* Video Placeholder */}
                        <div className="relative aspect-[9/16] bg-gradient-to-br from-sky-50 to-blue-100">
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                    <Instagram size={24} className="text-pink-500" />
                                </div>
                                <p className="text-gray-600 text-center text-sm">
                                    View this reel on Instagram
                                </p>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    Open Reel
                                </a>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-4">
                                    <button className="text-gray-700 hover:text-rose-500 transition-colors">
                                        <Heart size={24} />
                                    </button>
                                    <button className="text-gray-700 hover:text-emerald-500 transition-colors">
                                        <MessageCircle size={24} />
                                    </button>
                                    <button className="text-gray-700 hover:text-sky-500 transition-colors">
                                        <Send size={24} />
                                    </button>
                                </div>
                                <button className="text-gray-700 hover:text-sky-600 transition-colors">
                                    <Play size={20} />
                                </button>
                            </div>

                            {/* Caption */}
                            <div className="text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">aaristo_consulting</span>{" "}
                                Transform your life with our mind-body-soul approach. Tap the link above to watch the full reel!
                            </div>

                            {/* Link to Instagram */}
                            <div className="mt-4">
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-600 hover:text-sky-700 text-sm font-medium"
                                >
                                    View on Instagram →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {/* Instagram Embed */}
                    <div className="w-full max-w-[540px]">
                        <blockquote
                            className="instagram-media"
                            data-instgrm-permalink={url}
                            data-instgrm-version="14"
                            style={{
                                background: '#FFF',
                                border: '1px solid #e5e7eb',
                                borderRadius: '12px',
                                boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                                margin: '0 auto',
                                maxWidth: '540px',
                                width: '100%',
                                minWidth: '326px',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Fallback content that shows while loading */}
                            <div style={{
                                padding: '16px',
                                background: '#f9fafb',
                                textAlign: 'center',
                                borderBottom: '1px solid #e5e7eb'
                            }}>
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-6 h-6 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                                        <Instagram size={12} className="text-white" />
                                    </div>
                                    <span className="text-sm text-gray-600">Loading Instagram Reel...</span>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </>
            )}

            {/* Add global styles for Instagram embed */}
            <style jsx global>{`
                .instagram-media {
                    min-width: 326px !important;
                    max-width: 540px !important;
                }
                
                /* Ensure Instagram iframe has proper styling */
                iframe.instagram-media-rendered {
                    border-radius: 12px !important;
                    border: 1px solid #e5e7eb !important;
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
                    margin: 0 auto !important;
                }
                
                /* Style the Instagram play button */
                .EmbeddedMedia iframe {
                    border-radius: 12px !important;
                }
            `}</style>
        </div>
    );
}