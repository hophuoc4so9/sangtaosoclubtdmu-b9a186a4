// Config Google Sheets API
export const GOOGLE_SHEETS_CONFIG = {
  SHEET_ID: import.meta.env.VITE_GOOGLE_SHEET_ID || "",
  API_KEY: import.meta.env.VITE_GOOGLE_API_KEY || "",
};

// Interface cho dữ liệu
export interface HeroData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  universityinfo: string;
  membercount: string;
  eventcount: string;
  awardcount: string;
  backgroundimage: string;
  buttontext: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

export interface BoardMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
}

// Hàm lấy dữ liệu từ Google Sheets
async function getSheetData(
  sheetName: string
): Promise<Record<string, string>[]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_CONFIG.SHEET_ID}/values/${sheetName}?key=${GOOGLE_SHEETS_CONFIG.API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${sheetName}`);
    }

    const data = await response.json();
    const values = data.values || [];

    if (values.length === 0) return [];

    // Chuyển đổi header và rows thành objects
    const headers = values[0];
    return values.slice(1).map((row: string[]) => {
      const obj: Record<string, string> = {};
      headers.forEach((header: string, index: number) => {
        obj[header.toLowerCase().trim()] = row[index] || "";
      });
      return obj;
    });
  } catch (error) {
    console.error(`Error fetching sheet ${sheetName}:`, error);
    return [];
  }
}

// Hàm lấy Heroes
export async function getHeroes(): Promise<HeroData[]> {
  const data = await getSheetData("Heroes");
  return data as HeroData[];
}

// Hàm lấy Achievements
export async function getAchievements(): Promise<Achievement[]> {
  const data = await getSheetData("Achievements");
  return data as Achievement[];
}

// Hàm lấy Events
export async function getEvents(): Promise<Event[]> {
  const data = await getSheetData("Events");
  return data as Event[];
}

// Hàm lấy Board Members
export async function getBoardMembers(): Promise<BoardMember[]> {
  const data = await getSheetData("Board");
  return data as BoardMember[];
}
