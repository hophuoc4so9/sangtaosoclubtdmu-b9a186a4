import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Chuyển đổi Google Drive URL thành Direct Link để hiển thị ảnh
 * @param url - URL gốc (có thể là Drive link hoặc URL bình thường)
 * @returns Direct link hoặc URL gốc nếu không phải Drive link
 */
export function convertDriveUrlToDirectLink(url: string): string {
  if (!url) return "";
  
  // Kiểm tra nếu là Google Drive link
  const drivePatterns = [
    /drive\.google\.com\/file\/d\/([^/]+)/,
    /drive\.google\.com\/open\?id=([^&]+)/,
    /drive\.google\.com\/uc\?export=view&id=([^&]+)/,
    /drive\.google\.com\/uc\?id=([^&]+)/,
  ];

  for (const pattern of drivePatterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      const fileId = match[1];
      // Dùng lh3.googleusercontent.com format - tốt hơn cho embedding
      return `https://lh3.googleusercontent.com/d/${fileId}`;
    }
  }

  // Nếu không phải Drive link, trả về URL gốc
  return url;
}
