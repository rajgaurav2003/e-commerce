export default function FeaturedCategories() {
    const categories = [
      { name: "Fashion", img: "https://cdn-icons-png.flaticon.com/128/2972/2972549.png", bg: "bg-green-100" },
      { name: "Electronics", img: "https://cdn-icons-png.flaticon.com/128/2307/2307765.png", bg: "bg-pink-100" },
      { name: "Bags", img: "https://cdn-icons-png.flaticon.com/128/1375/1375121.png", bg: "bg-purple-100" },
      { name: "Footwear", img: "https://cdn-icons-png.flaticon.com/128/892/892692.png", bg: "bg-blue-100" },
      { name: "Groceries", img: "https://cdn-icons-png.flaticon.com/128/3081/3081974.png", bg: "bg-pink-100" },
      { name: "Beauty", img: "https://cdn-icons-png.flaticon.com/128/942/942799.png", bg: "bg-green-100" },
      { name: "Wellness", img: "https://cdn-icons-png.flaticon.com/128/3075/3075927.png", bg: "bg-pink-100" },
      { name: "Jeweller", img: "https://cdn-icons-png.flaticon.com/128/3082/3082037.png", bg: "bg-rose-100" },
      
    ];
  
    return (
      <div className="px-6 py-8">
        <h2 className="text-xl font-semibold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-20 h-20 flex items-center justify-center rounded-full ${category.bg}`}>
                <img src={category.img} alt={category.name} className="w-12 h-12 object-contain" />
              </div>
              <p className="mt-2 text-gray-700 text-sm">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  