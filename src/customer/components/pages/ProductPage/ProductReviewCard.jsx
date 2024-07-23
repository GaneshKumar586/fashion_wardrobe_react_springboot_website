import React from "react";
import { Avatar, Box, Rating, Typography } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

const ProductReviewCard = () => {
    return (

        <div className="flex flex-row flex-start border-gray-300 border-b-2">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>Q</Avatar>
            <div className="flex flex-col flex-start py-1 px-3">
                <p className="text-start text-red-600 font-bold text-lg">
                    Quintessential
                </p>
                <p className="text-start text-black opacity-50 text-sm">
                    Apr 24, 2021
                </p>
                <div className="flex flex-row">
                    <span className="text-start text-green-600 font-bold text-sm px-1 py-2">
                        4.6
                    </span>
                    <Rating
                        sx={{ p: 1 }}
                        name="read-only"
                        value={4.6}
                        precision={0.1}
                        readOnly
                    />
                </div>
                <p className="text-start text-black font-semibold py-2 text-md">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusantium nulla culpa vitae velit facere inventore exercitationem
                    quis iure nam esse. Quos optio inventore vero placeat, ad iste quo
                    consequatur ipsam.
                </p>
            </div>
        </div>

    );
};

export default ProductReviewCard;
