var consumerConfig = {
  "renderers": {
    "modules": {
      "itembank-player": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/multi-item-activity-player/releases/",
        "version": "0.0.27",
        "js": "0.0.27/multiItemActivityPlayer",
        "css": "0.0.27/multiItemActivityPlayer"
      },
      "imagelabel-dnd": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/image-label-dnd-player/releases/",
        "version": "0.0.29",
        "js": "0.0.29/libs-imagelabel-dnd-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components",
          "react-dnd",
          "react-dnd-html5-backend"
        ]
      },
      "mcsr-block": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/mcq-block-player/releases/",
        "version": "0.0.25",
        "js": "0.0.25/libs-mcsr-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components"
        ]
      },
      "fib-dnd": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/fib-dnd-player/releases/",
        "version": "0.0.18",
        "js": "0.0.18/libs-fib-dnd-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components",
          "react-dnd",
          "react-dnd-html5-backend"
        ]
      },
      "order-list": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/order-list-player/releases/",
        "version": "0.0.6",
        "js": "0.0.6/libs-order-list-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components"
        ]
      },
      "react": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/react/releases/",
        "version": "16.12.0",
        "js": "16.12.0/react.development"
      },
      "react-dom": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/react-dom/releases/",
        "version": "16.12.0",
        "js": "16.12.0/react-dom.development"
      },
      "react-dnd": {
        "baseURL": "https://cdn.jsdelivr.net/npm/react-dnd@10.0.2/dist/umd/",
        "js": "ReactDnD.min"
      },
      "react-dnd-html5-backend": {
        "baseURL": "https://cdn.jsdelivr.net/npm/react-dnd-html5-backend@10.0.2/dist/umd/",
        "js": "ReactDnDHTML5Backend.min"
      },
      "libs-player-ui-components": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/libs-player-ui-components/releases/",
        "version": "0.0.18",
        "js": "0.0.18/libs-player-ui-components"
      }
    }
  }
}
