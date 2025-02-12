import React from "react";
import { useEffect, useRef } from "react";
import "./SkillBox.scss"; // Import SCSS file

const Mobile = () => {
    const videoRef = useRef(null);
    const videoRef1 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 } // Video should be at least 50% visible to play
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef1.current) {
          if (entry.isIntersecting) {
            videoRef1.current.play();
          } else {
            videoRef1.current.pause();
          }
        }
      },
      { threshold: 0.5 } // Video should be at least 50% visible to play
    );

    if (videoRef1.current) {
      observer.observe(videoRef1.current);
    }

    return () => {
      if (videoRef1.current) {
        observer.unobserve(videoRef1.current);
      }
    };
  }, []);
  return (
    <div id="mobile" className="mobile-container">
        <h1>Mobile</h1>
        <div className="mobiles-box">
            <div className="mobile-box">
                <video ref={videoRef1} loop muted className="ios-video">
                    <source src="ios.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h2>Petopia: An IOS app for virtual pet nurturing </h2>
                <h3>
                🐾 "Bring your virtual pet to life! 
                This iOS app lets you choose, feed, and nurture your own digital companion, creating a fun and interactive pet care experience." 🎮 ✨
                </h3>
                <h4>
                  Swift, Xcode
                </h4>
                <button className="primary-button" onClick={() => window.location.href = "https://github.com/jonghwan3/Damagochi"}>Learn more</button>
            </div>
        </div>

        <div className="mobiles-box">
            <div className="mobile-box">
              <div className="android-container">
                <video ref={videoRef} loop muted className="android-video">
                    <source src="android.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
              </div>
                <h2>Pitch Perfect Coach: An Android app for vocal training </h2>
                <h3>
                🎤 "Sing your heart out and get instant feedback! This Android app helps you perfect your pitch with real-time analysis, making vocal training fun, interactive, and effortlessly effective." 🎶✨
                </h3>
                <h4>
                  Java, Android Studio, Signal Processing
                </h4>
                <button className="primary-button" onClick={() => window.location.href = "https://github.com/jonghwan3/Absolute_Pitch"}>Learn more</button>
            </div>
        </div>
    </div>
  );
};
export default Mobile;
