/* eslint-disable react/no-unescaped-entities */
import { HiArrowNarrowRight } from "react-icons/hi";

import { Timeline } from "flowbite-react";

export default function VerticalTimeline() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiArrowNarrowRight} />
        <Timeline.Content>
          <Timeline.Title>Flipped Learning Model</Timeline.Title>
          <Timeline.Body>
            <p>
              FlipToTech follows a flipped learning model, which means that
              students are exposed to learning materials and resources before
              attending the live sessions. This enables students to come
              prepared, engage actively in discussions, and deepen their
              understanding during interactive sessions.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiArrowNarrowRight} />
        <Timeline.Content>
          <Timeline.Title>Flexibility</Timeline.Title>
          <Timeline.Body>
            <p>
              Recognizing that not everyone has access to the necessary
              resources for home-based learning, we have established a physical
              learning hub that replicates the classroom environment. This
              dedicated space allows you to learn comfortably, even if you don't
              have consistent electricity at home, and without incurring any
              additional costs.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiArrowNarrowRight} />
        <Timeline.Content>
          <Timeline.Title>Change of Path Opportunities</Timeline.Title>
          <Timeline.Body>
            <p>
              At FlipToTech, our commitment extends beyond ensuring that you
              learn effectively. We also recognize the importance of discovering
              and pursuing the right career path. Therefore, we provide you with
              the opportunity to explore alternative fields if, after careful
              analysis, you determine that your current field may not align with
              your strengths and interests. We believe in supporting your
              journey of self-discovery and facilitating a smooth transition to
              a field where you can thrive.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
