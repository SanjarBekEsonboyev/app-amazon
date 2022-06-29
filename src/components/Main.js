import React, {useEffect, useState} from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../sass/main.scss';
import axios from "axios";
import { styled } from '@mui/material/styles';
import {Card, CardMedia, CardActions, CardContent, Collapse, IconButton, Typography, Button, Rating} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Cart from "../pages/Carts";
import {NavLink} from "react-router-dom";


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", marginRight: '50px', marginTop: '-150px'}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", marginLeft: '50px', zIndex: '99', marginTop: '-150px'}}
            onClick={onClick}
        />
    );
}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Main = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
        const [selectedId, setSelectedId] = useState('');
    const [expanded, setExpanded] = React.useState(false);
    const [count, setCount] = useState(0);

    const handleExpandClick = (id) => {
        setSelectedId(id);
        if (selectedId){
            setExpanded(!expanded);
            setCount(count + 1);
        }
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    const sliders = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500
    };

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
    }, []);

    const handleId = (id) => {
        selectedId(id);
    };

    return (
        <>
            <Cart selectedId={selectedId}/>
            <div className="main__slider">
                <Slider {...settings}>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" className="slider__img"
                             alt="Error"/>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg" className="slider__img"
                             alt="Error"/>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" className="slider__img"
                             alt="Error"/>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" className="slider__img"
                             alt="Error"/>
                    </div>
                </Slider>
            </div>
            <section className="container-fluid main_cards">
                <div className="row">
                    {products.filter((val) => {
                            if (search === "") {
                                return val
                            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                                return val
                            }
                        }).map((item, index) => {
                        return (
                            <div className="col-3 mt-3" key={item.id}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="350"
                                        image={item.image}
                                        alt={item.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" color="text.bold">
                                            {item.title.slice(0, 20)}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                        Category: {item.category}
                                    </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display: "flex", alignItems: "center"}}>
                                            <Rating name="half-rating" value={item.rating.rate} precision={0.5} />
                                            <span>{item.rating.rate}</span>
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <NavLink to={'/home/' + item.id}>
                                            <Button variant="outlined" onClick={() => handleId(item.id)}>
                                                Buy Now
                                            </Button>
                                        </NavLink>
                                        <span className="d-flex align-items-center ml-2">
                                            <RemoveRedEyeIcon/> <span className="ml-1">{count}</span>
                                        </span>
                                        <ExpandMore
                                            expand={expanded}
                                            onClick={() => handleExpandClick(item.id)}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    {selectedId === item.id ?
                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph>Description:</Typography>
                                                <Typography paragraph>
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </Collapse> : ""}
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
};

export default Main;
