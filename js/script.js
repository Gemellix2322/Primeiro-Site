 var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("topnav").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-70px";
                document.getElementById("topnav").style.top = "-70px";
            }
            prevScrollpos = currentScrollPos;
        }