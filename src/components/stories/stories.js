import React, { useEffect, useState } from 'react';
import { getStories } from '../service/api';
import Story from './story';

export const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories().then((ids) => setStoryIds(ids));
  }, []);

  return storyIds
    .slice(0, 10)
    .map((storyId, i) => <Story key={i} storyId={storyId} />);
};

export default Stories;
