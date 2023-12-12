<script>
                                // JavaScript for countdown timer
                                function updateCountdown() {
                                    const eventDate = new Date("December 15, 2023 00:00:00").getTime();
                                    const now = new Date().getTime();
                                    const timeDifference = eventDate - now;
                            
                                    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                                    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                                    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                            
                                    document.getElementById("countdown").innerHTML =
                                        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                                }
                            
                                // Update the countdown every second
                                setInterval(updateCountdown, 1000);
                            
                                // Initial update
                                updateCountdown();
                            </script>
                            var navlinks =document.getElementById('navlinks');
                            function showMenu() {
                                navlinks.style.right = "0";
                            }
                            function hideMenu() {
                                navlinks.style.right = "-200px";
                            }