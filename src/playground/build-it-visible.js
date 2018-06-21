console.log('built-it-visible.js is running!');

const app = {
    title: 'Visibility Toggle',
    subtitle: 'Here be the hidden things',
    visible: false
};

const appRoot = document.getElementById('app');

const show = () => {
    app.visible = true;
    renderApp();
}

const hide = () => {
    app.visible = false;
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {!app.visible && <button onClick={show}>Show Details</button>}
            {app.visible && <button onClick={hide}>Hide Details</button>}
            {app.visible && <p>{app.subtitle}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();