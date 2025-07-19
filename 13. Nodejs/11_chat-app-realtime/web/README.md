# WhatsApp Clone

A modern WhatsApp clone built with React, Vite, and Tailwind CSS. This project replicates the core functionality and design of WhatsApp Web with a clean, responsive interface.

## Features

- **Real-time Chat Interface**: Clean and intuitive chat UI similar to WhatsApp
- **Contact List**: Sidebar with contact list and search functionality
- **Message Bubbles**: Styled message bubbles for sent and received messages
- **Responsive Design**: Works on desktop and mobile devices
- **Modern Icons**: Beautiful icons using Lucide React
- **WhatsApp-like Styling**: Authentic WhatsApp color scheme and design patterns

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful and customizable icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn


### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd whatsapp-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx      # Contact list and navigation
│   └── Chat.jsx         # Chat interface and messages
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── App.css              # Component-specific styles
```

## Features in Detail

### Sidebar Component
- Contact list with avatars and last messages
- Search functionality
- Unread message indicators
- New chat button
- WhatsApp-style header with action buttons

### Chat Component
- Message bubbles for sent and received messages
- Message input with emoji and attachment buttons
- Voice message button
- Chat header with contact info and actions
- Welcome screen when no chat is selected

### Styling
- Custom WhatsApp color palette
- Responsive design
- Smooth transitions and hover effects
- Mobile-friendly interface

## Customization

### Colors
The WhatsApp color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  whatsapp: {
    green: '#25D366',
    dark: '#128C7E',
    light: '#DCF8C6',
    gray: '#F0F0F0',
    darkgray: '#667781',
    chatbg: '#EFEAE2',
  }
}
```

### Adding New Features
- **Real-time messaging**: Integrate with WebSocket or Firebase
- **File sharing**: Add file upload functionality
- **Voice messages**: Implement audio recording
- **Video calls**: Add WebRTC integration
- **User authentication**: Add login/signup system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by WhatsApp Web
- Icons provided by [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/)
