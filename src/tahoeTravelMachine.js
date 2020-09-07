import { Machine } from "xstate";

const tahoeTravelMachine = Machine({
  id: "tahoe-travel",
  initial: "walking",
  states: {
    walking: {
      on: {
        THUMBS_UP: "hitchhiking",
        ARRIVED: "arrived"
      }
    },
    hitchhiking: {
      on: {
        PICKED_UP: "riding",
        PASSED_BY: "disappointed"
      }
    },
    disappointed: {
      on: {
        WALK: "walking",
        THUMBS_UP: "hitchhiking"
      }
    },
    riding: {
      on: {
        CREEPED_OUT: "disappointed",
        ARRIVED: "arrived"
      }
    },
    arrived: {
      type: "final"
    }
  }
});

export default tahoeTravelMachine;
