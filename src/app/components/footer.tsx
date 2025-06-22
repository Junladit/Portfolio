// ตัวอย่าง Footer ที่แนะนำ (สร้างไฟล์ใหม่ components/footer.tsx)
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} JUNLADIT. All rights reserved.</p>
      </div>
    </footer>
  )
}