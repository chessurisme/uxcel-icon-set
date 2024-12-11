/**
 * Creates a new DOM element with the specified tag name, attributes, and child elements.
 *
 * @param {string} tagName - The name of the HTML tag to create.
 * @param {Object} props - An object representing the attributes to set on the element.
 * @param {Array|HTMLElement} [children] - Child nodes to append to the created element.
 * @returns {HTMLElement} The newly created DOM element with the specified properties and children.
 */
function createComponent(tagName, props, children = []) {
	const element = document.createElement(tagName);

	if (props) {
		Object.entries(props).forEach(([key, value]) => {
			element.setAttribute(key, value);
		});
	}

	const childArray = Array.isArray(children) ? children : [children];

	childArray
		.filter((child) => child != null)
		.forEach((child) => {
			if (child instanceof HTMLElement || child instanceof SVGElement) {
				element.appendChild(child);
			}
		});

	return element;
}

class HeadingUxcelIcons {
	constructor() {
		this.component = this.#create();

		return this.#init();
	}

	#init() {
		return this.component;
	}

	#create() {
		const wrapper = createComponent('div', {
			id: 'heading-wrapper',
			class: 'heading-wrapper'
		});

		const uxcelIconsHeading = createComponent('h1', {
			id: 'uxcel-icons-heading',
			class: 'uxcel-icons-heading display'
		});
		uxcelIconsHeading.textContent = 'Uxcel Icons';

		const by = createComponent('p', {
			id: 'by',
			class: 'by'
		});
		by.textContent = 'by';

		const uxcelIconsLogo = createComponent('img', {
			src: '../assets/images/brand.svg',
			id: 'uxcel-icons-logo',
			class: 'uxcel-icons-logo',
			alt: 'Uxcel Icon Logo',
			draggable: 'false',
			ondragstart: "'return false;'"
		});

		const dotCom = createComponent('p', {
			id: 'dot-com',
			class: 'dot-com'
		});
		dotCom.textContent = '.com';

		const referenceWrapper = createComponent(
			'div',
			{
				id: 'reference-wrapper',
				class: 'reference-wrapper'
			},
			[by, uxcelIconsLogo, dotCom]
		);

		const uxcelIconsDescription = createComponent('p', {
			id: 'uxcel-icons-description',
			class: 'uxcel-icons-description'
		});
		uxcelIconsDescription.textContent =
			"Discover Uxcel's comprehensive Free Icon Set, a versatile collection of over 500 beautifully crafted, pixel-perfect icons, now had a dedicated website.";

		wrapper.appendChild(uxcelIconsHeading);
		wrapper.appendChild(referenceWrapper);
		wrapper.appendChild(uxcelIconsDescription);

		this.#addEventListeners(uxcelIconsLogo);

		return wrapper;
	}

	#addEventListeners(logo) {
		logo.addEventListener('click', () => {
			window.open('https://uxcel.com?ref=chessurisme&utm_source=uxcel-icon-set.vercel.app', '_blank');
		});
	}
}

class SearchBar {
	constructor() {
		this.component = this.#create();

		return this.#init();
	}

	#init() {
		return this.component;
	}

	#create() {
		const leadingIcon = createComponent('img', {
			id: 'search-icon',
			alt: 'Search icon',
			src: '../icons/Ecommerce/Outline/Search.svg'
		});

		const searchBar = createComponent('input', {
			'id': 'search-bar',
			'type': 'search',
			'placeholder': 'Search icons...',
			'aria-label': 'Search for icons'
		});

		const component = createComponent(
			'div',
			{
				id: 'search-wrapper',
				class: 'search-wrapper'
			},
			[leadingIcon, searchBar]
		);

		this.#addEventListeners(leadingIcon, searchBar, component);

		return component;
	}

	#addEventListeners(leadingIcon, searchBar, component) {
		leadingIcon.addEventListener('click', () => {
			searchBar.focus();
		});

		component.addEventListener('click', (event) => {
			if (event.target !== searchBar) searchBar.focus();
		});

		searchBar.addEventListener('input', () => {
			component.classList.add('active');
		});
	}
}

class Chip {
	constructor(text, func) {
		this.text = text;
		this.func = func;
		this.component = this.#create();

		return this.#init();
	}

	#init() {
		return this.component;
	}

	#create() {
		const chip = createComponent('span', {
			'id': `${this.text}-chip`,
			'class': 'chip',
			'data-state': 'on'
		});
		chip.textContent = this.text;

		chip.addEventListener('click', (event) => {
			this.func(event);
			chip.dataset.state = chip.dataset.state === 'on' ? 'off' : 'on';
		});

		return chip;
	}
}

class ChipContainer {
	constructor() {
		this.component = this.#createComponent();

		return this.#init();
	}

	#init() {
		return this.component;
	}

	#createComponent() {
		const component = createComponent('div', {
			id: 'chip-container',
			class: 'chip-container'
		});

		const outlined = this.#createOutlinedChips();
		const filled = this.#createFilledChips();
		const colored = this.#createColoredChips();

		component.appendChild(outlined);
		component.appendChild(filled);
		component.appendChild(colored);

		return component;
	}

	#createOutlinedChips() {
		const chip = new Chip('Outlined', () => {
			console.log('Outlined chip clicked');
		});

		return chip;
	}

	#createFilledChips() {
		const chip = new Chip('Filled', () => {
			console.log('Filled chip clicked');
		});

		return chip;
	}

	#createColoredChips() {
		const chip = new Chip('Colored', () => {
			console.log('Colored chip clicked');
		});

		return chip;
	}
}

class Links {
	constructor() {
		this.component = this.#create();

		return this.#init();
	}

	#init() {
		return this.component;
	}

	#create() {
		const sourceCodeLink = this.#createSourceCodeLink();
		const figmaLink = this.#createFigmaLink();
		const component = createComponent(
			'div',
			{
				id: 'links',
				class: 'links'
			},
			[sourceCodeLink, figmaLink]
		);
		return component;
	}

	#createTabIcon() {
		const tabIcon = createComponent('img', {
			alt: 'Tab icon',
			class: 'tab-icon',
			src: '../icons/Arrows/Outline/New_Tab.svg'
		});
		return tabIcon;
	}

	#createWrapperLink(text, link) {
		const wrapper = createComponent('div', {
			id: 'source-code-wrapper',
			class: 'link-wrapper'
		});

		const linkComponent = createComponent('a', {
			href: link,
			target: '_blank',
			rel: 'noopener noreferrer'
		});
		linkComponent.textContent = text;

		linkComponent.addEventListener('click', () => {
			window.open(link, '_blank');
		});

		wrapper.appendChild(linkComponent);
		wrapper.appendChild(this.#createTabIcon());

		return wrapper;
	}

	#createSourceCodeLink() {
		return this.#createWrapperLink(
			'Source Code',
			'https://github.com/chessurisme/uxcel-icon-set?ref=chessurisme&utm_source=uxcel-icon-set.vercel.app'
		);
	}

	#createFigmaLink() {
		return this.#createWrapperLink(
			'Icons in Figma',
			'https://www.figma.com/community/file/1242748013102755522/500-free-icon-set-by-uxcel?ref=chessurisme&utm_source=uxcel-icon-set.vercel.app'
		);
	}
}

class Shader {
	constructor() {
		// Create container for the shader
		this.container = document.createElement('div');
		this.container.className = 'shader-container';

		// Create canvas for the mouse-following circle
		this.backgroundCanvas = document.createElement('canvas');
		this.backgroundCtx = this.backgroundCanvas.getContext('2d');
		this.backgroundCanvas.id = 'shader-background';

		// Foreground overlay
		this.foregroundOverlay = document.createElement('div');
		this.foregroundOverlay.id = 'shader-foreground-overlay';

		// Append layers to container
		this.container.appendChild(this.backgroundCanvas);
		this.container.appendChild(this.foregroundOverlay);

		// Smooth mouse tracking
		this.mouseX = window.innerWidth / 2;
		this.mouseY = window.innerHeight / 2;
		this.targetMouseX = this.mouseX;
		this.targetMouseY = this.mouseY;

		// Pulsing and animation parameters
		this.baseRadius = 50;
		this.circleRadius = this.baseRadius;
		this.pulseIntensity = 20;
		this.pulseSpeed = 0.03;
		this.pulseTime = 0;
		this.smoothness = 0.035; // Lower value = smoother but slower follow
		this.blur = 500; // Increased blur

		this.#setup();
		this.#setupEventListeners();
		this.#animate();

		return this.container;
	}

	#setup() {
		// Background canvas setup
		this.backgroundCanvas.style.position = 'fixed';
		this.backgroundCanvas.style.top = '0';
		this.backgroundCanvas.style.left = '0';
		this.backgroundCanvas.style.width = '100vw';
		this.backgroundCanvas.style.height = '100vh';
		this.backgroundCanvas.style.zIndex = '-5';
		this.backgroundCanvas.style.pointerEvents = 'none';

		const resizeHandler = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			const dpr = window.devicePixelRatio || 1;

			// Resize background canvas
			this.backgroundCanvas.style.width = `${width}px`;
			this.backgroundCanvas.style.height = `${height}px`;
			this.backgroundCanvas.width = width * dpr;
			this.backgroundCanvas.height = height * dpr;
			this.backgroundCtx.scale(dpr, dpr);
		};

		resizeHandler();
		window.addEventListener('resize', resizeHandler);
	}

	#setupEventListeners() {
		// Track mouse movement
		window.addEventListener('mousemove', (e) => {
			this.targetMouseX = e.clientX;
			this.targetMouseY = e.clientY;
		});
	}

	#animate() {
		// Smooth mouse position interpolation
		this.mouseX += (this.targetMouseX - this.mouseX) * this.smoothness;
		this.mouseY += (this.targetMouseY - this.mouseY) * this.smoothness;

		// Consistent pulsing
		this.pulseTime += this.pulseSpeed;
		const pulseOffset = Math.sin(this.pulseTime) * this.pulseIntensity;
		this.circleRadius = this.baseRadius + pulseOffset;

		// Clear previous frame
		const width = this.backgroundCanvas.width / window.devicePixelRatio;
		const height = this.backgroundCanvas.height / window.devicePixelRatio;
		this.backgroundCtx.clearRect(0, 0, width, height);

		// Create radial gradient with increased blur
		const gradient = this.backgroundCtx.createRadialGradient(
			this.mouseX,
			this.mouseY,
			0,
			this.mouseX,
			this.mouseY,
			this.circleRadius + this.blur
		);

		// Purple gradient with soft edges
		gradient.addColorStop(0, 'rgba(124, 58, 237, 0.4)');
		gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.2)');
		gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

		// Draw the gradient circle with blur
		this.backgroundCtx.shadowColor = 'rgba(124, 58, 237, 0.3)';
		this.backgroundCtx.shadowBlur = this.blur;
		this.backgroundCtx.beginPath();
		this.backgroundCtx.fillStyle = gradient;
		this.backgroundCtx.arc(this.mouseX, this.mouseY, this.circleRadius, 0, Math.PI * 2);
		this.backgroundCtx.fill();
		this.backgroundCtx.shadowBlur = 0; // Reset shadow blur

		// Continue animation
		requestAnimationFrame(() => this.#animate());
	}
}

function initializeApp() {
	const main = document.querySelector('main');

	const headingUxcelIcons = new HeadingUxcelIcons();
	const searchBar = new SearchBar();
	const chipContainer = new ChipContainer();
	const links = new Links();
	const shader = new Shader();

	main.appendChild(headingUxcelIcons);
	main.appendChild(searchBar);
	main.appendChild(chipContainer);
	main.appendChild(links);
	main.appendChild(shader);
}

initializeApp();
