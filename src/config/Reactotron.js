import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

const tron = Reactotron.configure({
  name: "Crud Products",
  host: "127.0.0.1",
  port: 10000,
})
  .configure()
  .use(reactotronRedux())
  .connect();

tron.clear();

// eslint-disable-next-line no-console
console.tron = tron;

export default tron;
