import React from 'react';
import { Coffee, Gamepad2, BookOpen, Music, Camera, Code2 } from 'lucide-react';

const Personal = () => {
  const interests = [
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Coffee & Code",
      description: "My daily ritual involves way too much coffee and debugging until 3 AM. The best ideas come at the worst times."
    },
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Gaming",
      description: "When I'm not coding, I'm probably gaming. Currently obsessed with real world games and anything with good storytelling."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Learning",
      description: "Always reading something - tech blogs, research papers, or random Wikipedia articles. Knowledge is power, right?"
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Music",
      description: "Coding with music is the best. Currently listening to lo-fi hip hop, but my playlist is all over the place."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Photography",
      description: "Love capturing moments, especially during hikes in the mountains around Dehradun. Nature + technology = perfect combo."
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Open Source",
      description: "Contributing to open source projects when I can. The community is amazing and I learn something new every time."
    }
  ];


};

export default Personal;
