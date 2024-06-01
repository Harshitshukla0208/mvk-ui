# MVK-UI

`mvk-ui` is a React component library that provides a set of customizable UI components for building modern web applications. The library includes buttons, input fields, forms, cards, navigation bars, footers, dropdown selectors, and more.

## Installation

To install the package, use npm or yarn:

```bash
npm install mvk-ui
```

or

```bash
yarn add mvk-ui
```

## Usage

### Button Components

#### Primary Button

```jsx
import { Primarybtn } from 'mvk-ui';

function App() {
    return <Primarybtn onClick={() => alert('Primary button clicked')}>Primary Button</Primarybtn>;
}

export default App;
```

#### Secondary Button

```jsx
import { Secondarybtn } from 'mvk-ui';

function App() {
    return <Secondarybtn onClick={() => alert('Secondary button clicked')}>Secondary Button</Secondarybtn>;
}

export default App;
```

#### Danger Button

```jsx
import { Dangerbtn } from 'mvk-ui';

function App() {
    return <Dangerbtn onClick={() => alert('Danger button clicked')}>Danger Button</Dangerbtn>;
}

export default App;
```

#### Success Button

```jsx
import { Successbtn } from 'mvk-ui';

function App() {
    return <Successbtn onClick={() => alert('Success button clicked')}>Success Button</Successbtn>;
}

export default App;
```

#### Icon Button

```jsx
import { Iconbtn } from 'mvk-ui';

function App() {
    return <Iconbtn onClick={() => alert('Icon button clicked')} />;
}

export default App;
```

### Input Components

#### Input Fields

```jsx
import { Input1 } from 'mvk-ui';

function App() {
    return (
        <div style={{ margin: '50px' }}>
            <Input1 label="Username" placeholder="Username..." />
            <Input1 label="Password" placeholder="Password..." type="password" />
            <Input1 label="Email" placeholder="Email..." type="email" style={{ width: '40%' }} />
        </div>
    );
}

export default App;
```

### Form Components

#### Login Form

```jsx
import { LoginForm } from 'mvk-ui';

function App() {
    const handleLogin = (username: string, email: string, password: string) => {
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="app-container">
            <LoginForm 
                onSubmit={handleLogin} 
                usernamePlaceholder="Your username" 
                emailPlaceholder="Your email" 
                passwordPlaceholder="Your password" 
                usernameLabel="Username" 
                emailLabel="Email Address" 
                passwordLabel="Password" 
                buttonText="Sign In"
            />
        </div>
    );
}

export default App;
```

### Text Area Component

```jsx
import { TextArea } from 'mvk-ui';

function App() {
    return (
        <div className="app-container">
            <TextArea 
                label="Description" 
                placeholder="Enter your description here" 
                rows={4}
            />
        </div>
    );
}

export default App;
```

### Card Components

#### Card1

```jsx
import { Card1 } from 'mvk-ui';
import image from './assets/user.png';

function App() {
    return (
        <Card1 
            textColor="" 
            image={image} 
            title="Harshit Shukla" 
            text="A web developer and a third year undergrad" 
        />
    );
}

export default App;
```

#### Card2

```jsx
import { Card2 } from 'mvk-ui';
import image from './assets/user.png';

function App() {
    return (
        <Card2 
            textColor="" 
            image={image} 
            title="Harshit Shukla" 
            text="A web developer and a third year undergrad" 
            text_on_btn="Contact" 
        />
    );
}

export default App;
```

#### Card3

```jsx
import { Card3 } from 'mvk-ui';
import image1 from './assets/laptop.webp';

function App() {
    return (
        <Card3 
            textColor="" 
            image={image1} 
            title="HP-Victus" 
            product_price="55000/-" 
            text="A perfect gaming laptop comes with Ryzen 5 5600H and RTX 3050" 
            text_on_btn="Add to cart" 
        />
    );
}

export default App;
```

### Navbar Component

```jsx
import { Navbar1 } from 'mvk-ui';

function App() {
    const navbarLinks = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Services', url: '/services' },
        { label: 'Contact', url: '/contact' }
    ];

    return (
        <div className="app-container">
            <Navbar1 
                brand="My Brand" 
                links={navbarLinks} 
                backgroundColor="#fff" 
                textColor="#333"
            />
        </div>
    );
}

export default App;
```

### Footer Components

#### FooterDark

```jsx
import { FooterDark } from 'mvk-ui';

function App() {
    const footerLinks = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Contact', url: '/contact' }
    ];

    return (
        <FooterDark 
            text="© 2024 Your Company. All rights reserved." 
            links={footerLinks} 
            backgroundColor="#282c34" 
            textColor="#61dafb"
        />
    );
}

export default App;
```

#### FooterLight

```jsx
import { FooterLight } from 'mvk-ui';

function App() {
    const footerLinks = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Contact', url: '/contact' }
    ];

    return (
        <FooterLight 
            text="© 2024 Your Company. All rights reserved." 
            links={footerLinks} 
            backgroundColor="#fff" 
            textColor="#333"
        />
    );
}

export default App;
```

### Dropdown Selector

```jsx
import { Selector } from 'mvk-ui';

function App() {
    const dropdownOptions = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ];

    const handleSelect = (value: string) => {
        console.log('Selected value:', value);
    };

    return (
        <div className="app-container">
            <Selector 
                options={dropdownOptions} 
                placeholder="Select an option" 
                onSelect={handleSelect} 
            />
        </div>
    );
}

export default App;
```

### Avatar Component

```jsx
import { Avatar } from 'mvk-ui';
import defaultAvatar from './assets/user.png';

function App() {
    return (
        <div className="app-container">
            <Avatar 
                src="https://example.com/avatar.png" 
                alt="User Avatar" 
                size={100} 
                shape="circle" 
                border={true} 
                borderColor="transparent" 
                defaultImage={defaultAvatar}
            />
        </div>
    );
}

export default App;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License.

---

This README provides examples for all the components in your `mvk-ui` library, showing how to use each one in an application. It covers buttons, input fields, forms, cards, navigation bars, footers, dropdown selectors, and avatars, and includes the necessary code snippets to help users integrate these components into their projects.
