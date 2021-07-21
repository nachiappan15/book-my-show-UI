const settings = {
    Infinity: false,
    autoPlay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow:   5,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }

    ]
};
 
export default  settings;