import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { getMenu } from "@/services/user";
import { ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Animation from "@/components/Animation";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [todayMenus, setTodayMenus] = useState([]);
  const [tomorrowMenus, setTomorrowMenus] = useState([]);
  const [dayAfterTomorrowMenus, setDayAfterTomorrowMenus] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("Today");
  const [isLunch, setIsLunch] = useState(true); // State for controlling Lunch/Dinner switch
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true); // State for loading indicator

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  useEffect(() => {
    setIsLoading(true); // Start loading
    getMenu()
      .then((res) => {
        setMenus(res.menus);
        setTodayMenus(
          res.menus.filter(
            (menu) => formatDate(menu.date) === formatDate(today)
          )
        );
        setTomorrowMenus(
          res.menus.filter(
            (menu) => formatDate(menu.date) === formatDate(tomorrow)
          )
        );
        setDayAfterTomorrowMenus(
          res.menus.filter(
            (menu) => formatDate(menu.date) === formatDate(dayAfterTomorrow)
          )
        );
      })
      .catch((err) => console.error("Error fetching menus:", err))
      .finally(() => setIsLoading(false)); // Stop loading
  }, []);

  useEffect(() => {
    setCart([]); // Reset cart when activeTab changes
  }, [activeTab]);

  const formatDate = (date) => format(new Date(date), "MMMM dd, yyyy");

  const handleAddToCart = (menu) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === menu.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === menu.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...menu, quantity: 1 }];
      }
    });
  };
  
  const handleRemoveFromCart = (menuId) => {
    console.log('menuId',menuId);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === menuId);
      // console.log(existingItem);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== menuId);
      } else {
        return prevCart.map((item) =>
          item.id === menuId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };
  
  const getQuantity = (menuId) => {
    const cartItem = cart.find((item) => item.id === menuId);
    return cartItem ? cartItem.quantity : 0;
  };
  

  const renderMenuSection = (menus) => (
    <section className="mb-8">
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {menus.map(
          (menu) =>
            ((isLunch && menu.shift === "Lunch") ||
              (!isLunch && menu.shift === "Dinner")) && (
              <Card
                key={menu.id}
                className="min-w-[250px] shadow-md hover:shadow-lg transition-shadow flex flex-col relative"
              >
                <div
                  className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    menu.shift === "Lunch" ? "bg-primary" : "bg-blue-500"
                  }`}
                >
                  {menu.shift}
                </div>

                {/* {menu.photo_url ? (
                  <img
                    src={menu.photo_url}
                    alt={menu.variant}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-t-lg">
                    <span className="text-gray-500">Image Unavailable</span>
                  </div>
                )} */}

                { 
                  menu.photo_url &&
                  <img
                    src={menu.photo_url}
                    alt={menu.variant}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                }


                <CardContent className="flex-grow pt-4">
                  <div className="text-lg font-semibold">
                    {menu.variant}
                    {/* <span
                      className={`text-sm font-light ml-2 ${
                        menu.status === "Available"
                          ? "text-primary"
                          : "text-red-500"
                      }`}
                    >
                      {menu.status}
                    </span> */}
                  </div>
                  
                  <p className="text-gray-600 text-xs">{menu.description}</p>
                  <p className="font-semibold mt-2">Items:</p>
                  <p className="text-gray-700">
                    {menu.menu_items.join(", ")}
                    <span className="font-semibold mt-2 block">
                      ₹{parseFloat(menu.price).toFixed(2)}/-
                    </span>
                  </p>
                </CardContent>

                <CardFooter>
                  {getQuantity(menu.id) > 0 ? (
                    <div className="flex items-center justify-between w-full">
                      <Button
                        className="bg-red-500 hover:bg-red-600 active:bg-red-600 text-white w-8 h-8 flex items-center justify-center"
                        onClick={() => handleRemoveFromCart(menu.id)}
                      >
                        -
                      </Button>
                      <span className="text-lg font-semibold">
                        {getQuantity(menu.id)}
                      </span>
                      <Button
                        className="bg-primary hover:bg-primary text-white w-8 h-8 flex items-center justify-center"
                        onClick={() => handleAddToCart(menu)}
                      >
                        +
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="w-full bg-primary text-white hover:bg-primary/90"
                      onClick={() => handleAddToCart(menu)}
                    >
                      Add
                    </Button>
                  )}
                </CardFooter>
              </Card>
            )

          )}
          {(isLunch && menus.filter(m=>m.shift==='Lunch').length===0) && <p className="w-fit mx-auto">No Menu Available.</p>}
          {(!isLunch && menus.filter(m=>m.shift==='Dinner').length===0) && <p className="w-fit mx-auto">No Menu Available.</p>}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {isLoading && (
        // Full-screen overlay with loading indicator
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
           */}
           {/* <img src="/loader.gif" alt="Loader" /> */}
           <Animation/>
        </div>
      )}

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-2xl font-bold mb-6 text-center">Available Menus</h2>

        {/* Tabs for Today, Tomorrow, and Day After Tomorrow */}
        <div className="flex justify-center space-x-4 mb-6">
          <Button
          variant={activeTab === "Today"?'default':'secondary'}
          className={activeTab==='Today'?'text-white':''}
            onClick={() => setActiveTab("Today")}
          >
            Today
          </Button>
          <Button
          variant={activeTab === "Tomorrow"?'default':'secondary'}
          className={activeTab==='Tomorrow'?'text-white':''}
            onClick={() => setActiveTab("Tomorrow")}
          >
            Tomorrow
          </Button>
          <Button
          variant={activeTab === "DayAfterTomorrow"?'default':'secondary'}       
          className={activeTab==='DayAfterTomorrow'?'text-white':''}     
            onClick={() => setActiveTab("DayAfterTomorrow")}
          >
            Day After Tomorrow
          </Button>
        </div>

        {/* Lunch/Dinner Switch */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Label className="text-lg font-semibold">Lunch</Label>

          <Switch
              checked={ !isLunch }
              onCheckedChange={(checked) => setIsLunch(!checked)}
          />
        
          <Label className="text-lg font-semibold">Dinner</Label>
        </div>

        {/* Render Menus Based on Active Tab */}
        {activeTab === "Today" && renderMenuSection(todayMenus)}
        {activeTab === "Tomorrow" && renderMenuSection(tomorrowMenus)}
        {activeTab === "DayAfterTomorrow" &&
          renderMenuSection(dayAfterTomorrowMenus)}
      </main>

      {/* Floating Button for Checkout */}

      {cart.length > 0 && (
        <div className=" flex justify-end px-8 mb-6">
        <Button
          // className="fixed bottom-8 right-8 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 p-4"
          className=" bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 p-4"
          onClick={() => navigate("/checkout", { state: { cart } })}
        >
          <ShoppingCart className="w-6 h-6" /> Order Now
        </Button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Menu;
