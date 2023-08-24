// const pSkills = {
//     autoPlay: true,
//     fullScreen: {
//         enable: false,
//         zIndex: 0
//     },
//     fpsLimit: 24,
//     particles: {
//         links: {
//             enable: false,
//             distance: 100,
//             triangles: {
//                 enable: true,
//                 frequency: .2
//             },
//             frequency: .9,
//             blink: true,
//             consent: true,
//             wrap: true,
//             width: .1
//         },
//         reduceDuplicates: true,
//         color: {
//             value: ["#4f36b7"],
//         },
//         move: {
//             enable: true,
//             outModes: {
//                 default: "bounce"
//             },
//             speed: .6
//         },
//         number: {
//             density: {
//                 enable: true,
//                 area: 1000,
//                 factor: 1000,
//             },
//             limit: 200,
//             value: 150,
//         },
//         shape: {
//             close: true,
//             fill: true,
//             options: {
//                 image: [
//                     {
//                         "src": "https://particles.js.org/images/fruits//apple.png",
//                         "width": 32,
//                         "height": 32
//                       }
//                 ],
//                 type: 'image'
//             },
//         },
//         size: {
//             value: {
//                 min: 20,
//                 max: 25,
//             },
//         }
//     },
//     pauseOnBlur: true,
//     pauseOnOutsideViewport: true,
//     zLayers: 100
// }

const pSkills = {
    "autoPlay": true,
    "background": {
      "color": {
        "value": "transparent"
      },
      "opacity": 1
    },
    "fullScreen": {
      "enable": false,
      "zIndex": 100
    },
    "detectRetina": true,
    "fpsLimit": 60,
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onHover": {
          "enable": false,
          "mode": "bubble",
          "parallax": {
            "enable": false,
            "force": 60,
            "smooth": 10
          }
        },
        "resize": {
          "delay": 0.5,
          "enable": true
        }
      },
      "modes": {
        "trail": {
          "delay": 1,
          "pauseOnStop": false,
          "quantity": 1
        },
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "easing": "ease-out-quad",
          "factor": 1,
          "maxSpeed": 50,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 400,
          "duration": 2,
          "mix": false,
          "opacity": 0.8,
          "size": 40,
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "mix": false,
            "selectors": []
          }
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 400,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 1
          }
        },
        "push": {
          "default": true,
          "groups": [],
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "selectors": []
          }
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        }
      }
    },
    "particles": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": true,
            "minimumValue": 1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": true,
            "minimumValue": 1
          },
          "value": 1
        }
      },
      "color": {
        "value": "#ffffff",
      },
      "move": {
        "outModes": {
            "default": "bounce"
        },
        "enable": true,
      },
      "number": {
        "density": {
          "enable": true,
          "width": 1920,
          "height": 1080
        },
        "limit": 0,
        "value": 80
      },
      "reduceDuplicates": true,
      "shape": {
        "close": true,
        "fill": true,
        "options": {
          "character": {
            "fill": false,
            "font": "Verdana",
            "style": "",
            "value": "*",
            "weight": "400"
          },
          "char": {
            "fill": false,
            "font": "Verdana",
            "style": "",
            "value": "*",
            "weight": "400"
          },
          "polygon": {
            "sides": 5
          },
          "star": {
            "sides": 5
          },
          "image": [
            {
              "src": "/assets/png/react.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/Three.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/redux.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/python.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/node.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/mysql.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/mongodb.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/javascript.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/html.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/github.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/firebase.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/docker.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/django.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/digitalocean.png",
              "width": 32,
              "height": 32
            },
            {
              "src": "/assets/png/css.png",
              "width": 32,
              "height": 32
            }
          ],
          "images": [
            {
                "src": "/assets/png/react.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/Three.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/redux.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/python.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/node.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/mysql.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/mongodb.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/javascript.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/html.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/github.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/firebase.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/docker.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/django.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/digitalocean.png",
                "width": 32,
                "height": 32
            },
            {
                "src": "/assets/png/css.png",
                "width": 32,
                "height": 32
            }
          ]
        },
        "type": "image"
      },
      "size": {
        "value": 20,
      },
      "zIndex": {
        "value": 0,
        "opacityRate": 1,
        "sizeRate": 1,
        "velocityRate": 1
      },
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "zLayers": 1,
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    }
}

export default pSkills;