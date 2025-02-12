import React from "react";
import { useEffect, useRef } from "react";
import "./SkillBox.scss"; // Import SCSS file

const Research = () => {
    const videoRef = useRef(null);

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
  return (
    <div id="research" className="mobile-container">
        <h1>Research</h1>
        <div className="mobiles-box">
            <div className="mobile-box">
                <img src="research1.png" className="research-img"></img>
                <h2>Optimized Transformer Pipelines for Edge AI</h2>
                <h3>
                    🔹 Seamlessly shard large language models (LLMs) like OPT and integrate them into the computation-efficient PipeEdge framework for distributed processing.
                    <br></br>
                    <br></br>
                    🔹 Enhance performance with SNIP pruning, streamlining transformer models for real-time edge deployments, reducing inference time by 20%.
                </h3>
                <h4>
                LLM, Distributed learning, Pruning, Quantization, Huggingface, PYTHON, PYTORCH, TENSORFLOW
                </h4>
                <button className="primary-button" onClick={() => window.location.href = "https://github.com/jonghwan3/PipeEdgeLLM/tree/opt"}>Learn more</button>
            </div>
        </div>
        <div className="mobiles-box">
            <div className="mobile-box">
                <img src="research2.png" className="research-img"></img>
                <h2>FedQOGD: Federated Online Learning with Efficiency</h2>
                <h3>
                🔹 Developed FedQOGD, a communication-efficient federated learning algorithm leveraging partial participation and quantization for distributed time-series data.
                <br></br>
                <br></br>
                🔹 Proved its statistical optimality, ensuring robust performance in real-world applications.
                <br></br>
                <br></br>
                🔹 Achieved 99.4% reduction in communication overhead - without compromising accuracy!
                </h3>
                <h4>
                FEDERATED learning, Quantization, PYTHON, PYTORCH, TENSORFLOW
                </h4>
                <button className="primary-button" onClick={() => window.location.href = "https://ieeexplore.ieee.org/document/9771579"}>Learn more</button>
            </div>
        </div>
    </div>
  );
};
export default Research;
