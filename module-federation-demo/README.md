# Module Federation Demo

This is a demo to use basic Webpack `Module Federation` in React & Vue applications.

[Documentation](https://webpack.js.org/plugins/module-federation-plugin/)

## Memo

1. use `external-remotes-plugin` to dynamically insert remote module baseUrl
2. Be careful when naming the remote module component name, if remote component name is the same with the host component name where includes that remote component. there might be some unpredictable issues on overwriten the host component.
3. `singleton` will restricted the dependency with only 1 version in the scope, it is critical to have only one instance of the library running at a time.(Default: false)
4. `eager` will include the dependency with remote module, so that host dont need to provide that.(Default: false)
