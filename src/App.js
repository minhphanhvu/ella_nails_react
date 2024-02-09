import React, { useState, useEffect } from "react";
import { NavigationComponent } from "components/NavigationComponent";
import Home from "components/Home";
import About from "components/About";
import { Route, Routes } from "react-router-dom";
import { BookingComponent } from "components/Book";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [bookingPage, setBookingPage] = useState(false);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div className="App">
      {console.log("isMobile", isMobile)}
      {console.log("rerender the App.js")}
      {bookingPage ? (
        <BookingComponent />
      ) : (
        <>
          <NavigationComponent
            isMobile={isMobile}
            bookingPage={bookingPage}
            setBookingPage={setBookingPage}
          />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="book" element={<BookingComponent />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
