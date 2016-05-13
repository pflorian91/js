/**
 * tutorial1 created on 3/16/16 8:41 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
            Hello, world! I am a CommentBox.
        </div>
        );
    }
});
ReactDOM.render(
<CommentBox />,
    document.getElementById('content')
);
