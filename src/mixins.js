export const DetectMobile = {
	methods: {
		isMobile: function() {
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				return true
			} else {
				return false
			}
		}
	}
}

export const DetectHome = {
    methods: {
        isHome: function() {
            if(window.location.pathname == "/") {
                return true
            } else {
                return false
            }
        }
    }
}