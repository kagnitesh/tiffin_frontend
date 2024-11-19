import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast"; // Assuming toast notifications are used
import { Separator } from "@/components/ui/separator";
import { addOrder, getAddress, initiatePayment } from "@/services/user";
import Header from "@/components/Header";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const location = useLocation();
  const cart = location.state?.cart;
  const [isLoading, setIsLoading] = useState(false);

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    getAddress().then((resp) => {
      setAddresses(resp.addresses);
    });
  }, []);

  // Redirect to home if the cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);



  // Form state
  const [form, setForm] = useState({
    address_id: "",
    mobile_no: "",
    note: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // console.log(cart);

  // Handle form input changes
  const handleChange = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" })); // Clear error on change
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    // Validate address
    if (!form.address_id) newErrors.address_id = "Please select an address.";

    // Validate mobile number
    if (!form.mobile_no) {
      newErrors.mobile_no = "Please enter a mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile_no)) {
      newErrors.mobile_no =
        "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log("Order Data:", form);
      setIsLoading(true);
      // console.log(cart);
      const orderData = { ...form, menus: cart.map((c)=>{
        return {
          menu_id: c.id,
          quantity: c.quantity
        }
      }) };
      // console.log("Submitting Order:", orderData);
      addOrder(orderData)
        .then((resp) => {
          console.log(resp);
          const order = resp.order;
          const { id, mobile_no, totalAmount } = order;
          const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
          if(totalAmount!==total){
            toast({
              title: "Something went wrong",
              description: "There is something wrong with last order.",
              variant: "destructive",
            });
            navigate('/')
            return;
          }
          const paymentInfo = {
            orderId: id,
            amount: totalAmount,
            mobileNumber: mobile_no,
          };
          initiatePayment(paymentInfo)
            .then((resp) => {
              console.log(resp);
              const { url } = resp.data;
              window.location.href = url;
            })
            .catch((err) => {
              console.log(err);
              toast({
                title: "Payment Error",
                description: "Failed to initiate payment.",
                variant: "destructive",
              });
            })
            .finally(() => {
              setIsLoading(false);
            });
          // toast({
          //   title: "Order Submitted",
          //   description: "Your order has been placed successfully.",
          //   variant: "success",
          // });

          // navigate("/")
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });

      // navigate("/confirmation"); // Navigate to confirmation page
    } else {
      toast({
        title: "Form Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto">
        {isLoading && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="loader"></div>
          </div>
        )}
  
        <h2 className="text-2xl font-bold mb-2 text-center p-8 mt-8">Checkout</h2>
  
        {/* Cart Details */}
        <div className="max-w-lg mx-auto bg-white p-6 shadow-lg border rounded-lg mb-8">
          <h3 className="text-lg font-bold mb-4">Your Order Summary</h3>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between mb-4 border-b pb-4"
            >
              <img
                src={item.photo_url}
                alt={item.variant}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1 ml-4">
                <h4 className="text-md font-semibold">{item.variant}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm text-gray-700">
                  Items: {item.menu_items.join(", ")}
                </p>
                <p className="text-sm font-bold mt-1">
                  ₹{parseFloat(item.price).toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="text-md font-bold text-gray-800">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-lg">
            Total: ₹
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
        </div>
  
        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 shadow-lg border rounded-lg"
        >
          {/* Address Selection */}
          <div className="mb-4">
            <Label>Address</Label>
            <Select
              value={form.address_id}
              onValueChange={(value) => handleChange("address_id", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Address" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 shadow-lg rounded-md">
                {addresses.map((address) => (
                  <SelectItem
                    key={address.id}
                    value={address.id.toString()}
                    className="hover:bg-gray-100"
                  >
                    {address.shortname}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.address_id && (
              <p className="text-red-500 text-sm">{errors.address_id}</p>
            )}
          </div>
  
          {/* Mobile Number */}
          <div className="mb-4">
            <Label>Mobile Number</Label>
            <Input
              type="text"
              placeholder="Enter your 10-digit mobile number"
              value={form.mobile_no}
              onChange={(e) => handleChange("mobile_no", e.target.value)}
            />
            {errors.mobile_no && (
              <p className="text-red-500 text-sm">{errors.mobile_no}</p>
            )}
          </div>
  
          {/* Note (Optional) */}
          <div className="mb-4">
            <Label>Note (Optional)</Label>
            <Input
              type="text"
              placeholder="Add a note for the delivery (optional)"
              value={form.note}
              onChange={(e) => handleChange("note", e.target.value)}
            />
          </div>
  
          <Separator className="my-4" />
  
          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary/90"
          >
            Place Order
          </Button>
        </form>
      </div>
    </>
  );
  
};

export default Checkout;
