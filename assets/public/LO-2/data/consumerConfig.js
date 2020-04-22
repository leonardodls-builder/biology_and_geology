var consumerConfig = {
  "players": {
    "playerMap": {
      "collection": "multi-item-activity-player",
      "mcsr-block": "mcq-block-player",
      "imagelabel-dnd": "image-label-dnd-player",
      "fib-dnd": "fib-dnd-player",
      "order-list": "order-list-player"
    },
    "modules": {
      "multi-item-activity-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/multi-item-activity-player/releases/",
        "version": "0.0.22",
        "js": "0.0.22/multiItemActivityPlayer",
        "css": "0.0.22/multiItemActivityPlayer"
      },
      "image-label-dnd-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/image-label-dnd-player/releases/",
        "version": "0.0.26",
        "js": "0.0.26/libs-imagelabel-dnd-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components",
          "react-dnd",
          "react-dnd-html5-backend"
        ]
      },
      "mcq-block-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/mcq-block-player/releases/",
        "version": "0.0.24",
        "js": "0.0.24/libs-mcsr-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components"
        ]
      },
      "fib-dnd-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/fib-dnd-player/releases/",
        "version": "0.0.14",
        "js": "0.0.14/libs-fib-dnd-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components",
          "react-dnd",
          "react-dnd-html5-backend"
        ]
      },
      "order-list-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/order-list-player/releases/",
        "version": "0.0.5",
        "js": "0.0.5/libs-order-list-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components"
        ]
      },
      "react": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/react/releases/",
        "version": "16.12.0",
        "js": "16.12.0/react.development"
      },
      "react-dom": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/react-dom/releases/",
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
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/libs-player-ui-components/releases/",
        "version": "0.0.14",
        "js": "0.0.14/libs-player-ui-components"
      }
    }
  }
}
