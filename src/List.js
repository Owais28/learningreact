import React from "react";

export default function List(props) {

    return <div>
        <ul>
            {
                props.stories.map(
                    story => <div>
                        <h3>{story.title}</h3>
                        <p>{story.story}</p>
                    </div>
                )
            }
        </ul>
    </div>;
}
