/*
One key difference in JSX is that you can no longer use the word class to define HTML classes. 
This is because class is a reserved word in JavaScript. Instead, JSX uses className.

In fact, the naming convention for all HTML attributes and event references in JSX become camelCase. 
For example, a click event in JSX is onClick, instead of onclick. Likewise, onchange becomes onChange.
*/

const JSX = (
    <div className = "myDiv">
      <h1>Add a class to this div</h1>
    </div>
);