import {storiesOf} from "@storybook/react";
import {Card} from "../components/Card";

const stories = storiesOf('First test', module);
stories.add('Card', () => {
    return (<Card />)
});
