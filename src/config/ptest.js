const ptest = {
    fpsLimit: 60,
    particles: {
        links: {
            enable: true,
            distance: 50
        },
        move: {
            enable: true,
            speed: 5,
            outModes: {
                default: "bounce"
            }
        },
        size: {
            value: 1
        },
        color: {
            value: "#555"
        }
    }
}

export default ptest;