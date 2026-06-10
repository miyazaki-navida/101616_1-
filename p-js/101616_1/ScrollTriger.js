const trigger = new ScrollTrigger.default()

trigger.add('[data-trigger]')

trigger.add('[data-trigger="translateY"]',
	{ 
		once: false,
		offset: {
			viewport: {
				y: (trigger, frame, direction) => {
					return trigger.visible ? 0 : .1
				}
			}
		},
		toggle: {
			callback: {
				in: (trigger) => {

					const strs = trigger.element.querySelectorAll('span');

					anime({
						targets: strs,
						translateY:function(el,i){
							const y = (i % 2 == 0) ? 20: -20;
							return [y,0]
						},
						easing: 'easeInOutExpo',
						duration: 800,
						opacity:[0,1],
						delay: function(el, i) { return i * 20 }
					});

				}
			}
		}
	},
)

trigger.add('[data-trigger="scale"]',
	{ 
		once: false,
		offset: {
			viewport: {
				y: (trigger, frame, direction) => {
					return trigger.visible ? 0 : .1
				}
			}
		},
		toggle: {
			callback: {
				in: (trigger) => {

					const strs = trigger.element.querySelectorAll('span');

					anime({
						targets: strs,
						scale:[3,1],
						easing: 'easeInOutExpo',
						duration: 800,
						opacity:[0,1],
						delay: function(el, i) { return i * 20 }
					});

				}
			}
		}
	},
)

trigger.add('[data-trigger="translateX"]',
	{ 
		once: false,
		offset: {
			viewport: {
				y: (trigger, frame, direction) => {
					return trigger.visible ? 0 : .1
				}
			}
		},
		toggle: {
			callback: {
				in: (trigger) => {

					const strs = trigger.element.querySelectorAll('span');

					anime({
						targets: strs,
						translateX:function(el,i){
							const x = (i % 2 == 0) ? 20: -20;
							return [x,0]
						},
						easing: 'easeInOutExpo',
						duration: 800,
						opacity:[0,1],
						delay: function(el, i) { return i * 20 }
					});

				}
			}
		}
	},
)

trigger.add('[data-trigger="rotate"]',
	{ 
		once: false,
		offset: {
			viewport: {
				y: (trigger, frame, direction) => {
					return trigger.visible ? 0 : .1
				}
			}
		},
		toggle: {
			callback: {
				in: (trigger) => {

					const strs = trigger.element.querySelectorAll('span');

					anime({
						targets: strs,
						rotate: ["360deg",0],
						easing: 'easeOutBack',
						duration: 800,
						opacity:[0,1],
						delay: function(el, i) { return i * 20 }
					});

				}
			}
		}
	},
)

trigger.add('[data-trigger="rotate"]',
	{ 
		once: false,
		offset: {
			viewport: {
				y: (trigger, frame, direction) => {
					return trigger.visible ? 0 : .1
				}
			}
		},
		toggle: {
			callback: {
				in: (trigger) => {

					const strs = trigger.element.querySelectorAll('span');

					anime({
						targets: strs,
						rotate: ["360deg",0],
						easing: 'easeOutBack',
						duration: 800,
						opacity:[0,1],
						delay: function(el, i) { return i * 20 }
					});

				}
			}
		}
	},
)

trigger.add('[data-trigger="skew"]',
	{ 
		once: false,
		offset: {
			viewport: {
				y: (trigger, frame, direction) => {
					return trigger.visible ? 0 : .1
				}
			}
		},
		toggle: {
			callback: {
				in: (trigger) => {

					const strs = trigger.element.querySelectorAll('span');

					anime({
						targets: strs,
						skew: ["-80deg",0],
						easing: 'easeOutExpo',
						duration: 800,
						opacity:[0,1],
						delay: function(el, i) { return i * 20 }
					});

				}
			}
		}
	},
)

trigger.add('[data-trigger="rotateX"]',
	{ 
		once: false,
		offset: {
			viewport: {
				y: (trigger, frame, direction) => {
					return trigger.visible ? 0 : .1
				}
			}
		},
		toggle: {
			callback: {
				in: (trigger) => {

					const strs = trigger.element.querySelectorAll('span');

					anime({
						targets: strs,
						rotateX: ["180deg",0],
						easing: 'easeOutBack',
						duration: 800,
						opacity:{
							easing: 'easeOutQuart',
							duration: 1000,
							value:1,
						},
						delay: function(el, i) { return i * 20 }
					});

				}
			}
		}
	},
)

const str_animations = document.querySelectorAll('.str__animation');

if(str_animations.length > 0){
	str_animations.forEach(element => {
		let set_str = "";
		const strs = element.innerText.split("");

		if(strs.length > 0){
				strs.forEach(str => {
					set_str += '<span class="str">' + str + '</span>';
			});
		}
		element.innerHTML = set_str;
	});
}
