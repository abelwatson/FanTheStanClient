let apiURL: string = "";

switch (window.location.hostname) {
    case "localhost" || "127.0.0.1":
        apiURL = "http://localhost:3000";
        break;
    case "FanTheStanServer":
        apiURL = "https://fanthestanserver.herokuapp.com"
}

export default apiURL;