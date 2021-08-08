import React, { useEffect, useState } from "react";
import { getStory } from "../service/api";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Comments from "../comments/comments";
import { Meta } from '../meta/meta'

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => {
      if (data && data.url) {
        setStory(data);
      }
    });
  }, []);

  const { title, kids, id, url } = story;

  return story && url ? (
    <Accordion data-id={id}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Meta article={story} />
          {kids && <Comments commentIds={kids} />}
        </div>
      </AccordionDetails>
    </Accordion>
  ) : null;
};


export default Story;
