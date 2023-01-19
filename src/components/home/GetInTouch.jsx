import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Jumbotron} from "./migration";

const GetInTouch = ({ heading, message, email, img, imageSize }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
          <strike>{message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.</strike>
      </p>
        <div className="col-md-7">
            <Carousel>
                {img?.map((value, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={value.img}
                                alt="First slide"
                                width={imageSize.width}
                                height={imageSize.height}
                            />
                            <Carousel.Caption>
                                <h3>{value.label}</h3>
                                <p>
                                    {value.paragraph}
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel><br/>
        </div>
    </>
  );
};

export default GetInTouch;
