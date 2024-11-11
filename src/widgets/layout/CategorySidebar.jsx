import React from 'react';
import { Button, Typography } from '@material-tailwind/react';

const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "Machine Learning",
    "Cloud Computing",
    "Blockchain",
    "AI & Data Science",
];

export const CategorySidebar = ({ setCategory }) => {
    return (
        <div className="w-64 h-full bg-white text-white p-5">
            <div className="text-center mb-6">
                <Typography variant='h2' color='light-blue'>
                    Tech Categories
                </Typography>
                <Typography variant='h6' color='black' className='mt-4'>
                    Explore different categories of technology
                </Typography>
            </div>
            <div className="space-y-4">
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        fullWidth
                        className="bg-transparent text-black hover:bg-indigo-700 hover:text-white text-left"
                        onClick={() => setCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default CategorySidebar;
