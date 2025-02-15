// Tool data
const toolsData = {
    // Design & Creativity Tools
    'canva': {
        name: 'Canva AI',
        icon: 'image/tool-icons/canva.png',
        rating: '4.8/5',
        users: '100M+',
        pricing: 'Freemium',
        description: 'Canva AI is a powerful design platform that uses artificial intelligence to help create professional designs quickly.',
        features: [
            'Magic Design - instantly create designs',
            'AI Text to Image generation',
            'Background removal',
            'Photo editing with AI',
            'Brand Kit automation'
        ],
        useCases: [
            'Social media graphics',
            'Presentations',
            'Marketing materials',
            'Educational content',
            'Personal projects'
        ],
        link: 'https://www.canva.com'
    },
    'midjourney': {
        name: 'Midjourney',
        icon: 'image/tool-icons/midjourney.png',
        rating: '4.9/5',
        users: '10M+',
        pricing: 'Paid',
        description: 'Create stunning AI-generated artwork and illustrations with natural language prompts.',
        features: [
            'High-quality image generation',
            'Custom art styles',
            'Variations and upscaling',
            'Community features',
            'Discord integration'
        ],
        useCases: [
            'Digital art creation',
            'Concept design',
            'Book illustrations',
            'Game assets',
            'Visual brainstorming'
        ],
        link: 'https://www.midjourney.com'
    },
    'runway': {
        name: 'Runway ML',
        icon: 'image/tool-icons/runway.png',
        rating: '4.7/5',
        users: '5M+',
        pricing: 'Freemium',
        description: 'Advanced AI video editing and content creation platform.',
        features: [
            'Video editing with AI',
            'Green screen removal',
            'Motion tracking',
            'Text to video',
            'Style transfer'
        ],
        useCases: [
            'Video production',
            'Special effects',
            'Content creation',
            'Motion graphics',
            'Film editing'
        ],
        link: 'https://runway.ml'
    },

    // Development Tools
    'github-copilot': {
        name: 'GitHub Copilot',
        icon: 'image/tool-icons/github-copilot.png',
        rating: '4.7/5',
        users: '1M+',
        pricing: 'Paid',
        description: 'GitHub Copilot is your AI pair programmer that helps you write better code faster.',
        features: [
            'Real-time code suggestions',
            'Multiple programming language support',
            'Context-aware completions',
            'Natural language to code',
            'Integration with popular IDEs'
        ],
        useCases: [
            'Software development',
            'Code automation',
            'Learning programming',
            'Project development',
            'Code documentation'
        ],
        link: 'https://github.com/features/copilot'
    },
    'codeium': {
        name: 'Codeium',
        icon: 'image/tool-icons/codeium.png',
        rating: '4.6/5',
        users: '500K+',
        pricing: 'Free',
        description: 'Free AI-powered code completion tool supporting multiple IDEs and languages.',
        features: [
            'Code completion',
            'Code explanation',
            'Bug detection',
            'Multi-language support',
            'IDE integration'
        ],
        useCases: [
            'Code development',
            'Learning to code',
            'Code review',
            'Debugging',
            'Code optimization'
        ],
        link: 'https://codeium.com'
    },

    // Learning Tools
    'chatgpt': {
        name: 'ChatGPT',
        icon: 'image/tool-icons/chatgpt.png',
        rating: '4.9/5',
        users: '100M+',
        pricing: 'Freemium',
        description: 'Advanced AI language model for learning, writing, and problem-solving.',
        features: [
            'Natural language interaction',
            'Homework help',
            'Essay writing assistance',
            'Code explanation',
            'Language learning'
        ],
        useCases: [
            'Academic research',
            'Learning concepts',
            'Writing assistance',
            'Problem-solving',
            'Language practice'
        ],
        link: 'https://chat.openai.com'
    },
    'quillbot': {
        name: 'QuillBot',
        icon: 'image/tool-icons/quillbot.png',
        rating: '4.7/5',
        users: '50M+',
        pricing: 'Freemium',
        description: 'AI-powered writing and paraphrasing tool for better content creation.',
        features: [
            'Paraphrasing',
            'Grammar checking',
            'Citation generator',
            'Summarizer',
            'Plagiarism checker'
        ],
        useCases: [
            'Academic writing',
            'Content creation',
            'Research papers',
            'Article writing',
            'Essay improvement'
        ],
        link: 'https://quillbot.com'
    },

    // Productivity Tools
    'notion': {
        name: 'Notion AI',
        icon: 'image/tool-icons/notion-ai.png',
        rating: '4.8/5',
        users: '20M+',
        pricing: 'Freemium',
        description: 'AI-enhanced workspace for notes, tasks, and collaboration.',
        features: [
            'AI writing assistance',
            'Task management',
            'Document organization',
            'Team collaboration',
            'Template library'
        ],
        useCases: [
            'Note-taking',
            'Project management',
            'Team collaboration',
            'Knowledge base',
            'Personal organization'
        ],
        link: 'https://notion.so'
    },
    'otter': {
        name: 'Otter.ai',
        icon: 'image/tool-icons/otter.png',
        rating: '4.6/5',
        users: '10M+',
        pricing: 'Freemium',
        description: 'AI-powered meeting notes and real-time transcription.',
        features: [
            'Real-time transcription',
            'Meeting summarization',
            'Voice recognition',
            'Collaboration tools',
            'Search functionality'
        ],
        useCases: [
            'Meeting notes',
            'Interviews',
            'Lectures',
            'Content creation',
            'Research documentation'
        ],
        link: 'https://otter.ai'
    },

    // Add Writing & Content Tools
    'grammarly': {
        name: 'Grammarly AI',
        category: 'writing',
        icon: 'image/tool-icons/grammarly.png',
        rating: '4.8/5',
        users: '30M+',
        pricing: 'Freemium',
        description: 'AI-powered writing assistant for grammar and style improvement.',
        features: [
            'Grammar checking',
            'Style suggestions',
            'Tone detection',
            'Plagiarism checker',
            'Browser extension'
        ],
        link: 'https://www.grammarly.com'
    },
    'copy-ai': {
        name: 'Copy.ai',
        category: 'writing',
        icon: 'image/tool-icons/copy-ai.png',
        rating: '4.7/5',
        pricing: 'Freemium',
        description: 'AI content generation for marketing and business.',
        features: [
            'Blog post generation',
            'Social media content',
            'Email writing',
            'Product descriptions',
            'Ad copy'
        ],
        link: 'https://www.copy.ai'
    },

    // Add Research & Study Tools
    'zotero': {
        name: 'Zotero AI',
        category: 'research',
        icon: 'image/tool-icons/zotero.png',
        rating: '4.6/5',
        pricing: 'Free',
        description: 'Reference management with AI capabilities.',
        features: [
            'Citation management',
            'PDF organization',
            'Collaborative research',
            'Web clipping',
            'Bibliography generation'
        ],
        link: 'https://www.zotero.org'
    },

    // Add Audio & Video Tools
    'descript': {
        name: 'Descript',
        category: 'audio',
        icon: 'image/tool-icons/descript.png',
        rating: '4.8/5',
        pricing: 'Freemium',
        description: 'AI-powered audio and video editing platform.',
        features: [
            'Transcription',
            'Voice cloning',
            'Video editing',
            'Screen recording',
            'Collaboration tools'
        ],
        link: 'https://www.descript.com'
    },
    'murf': {
        name: 'Murf AI',
        category: 'audio',
        icon: 'image/tool-icons/murf.png',
        rating: '4.7/5',
        pricing: 'Freemium',
        description: 'AI voice generation and studio.',
        features: [
            'Text to speech',
            'Voice cloning',
            'Multiple languages',
            'Voice editing',
            'Commercial usage'
        ],
        link: 'https://murf.ai'
    },

    // Design & Art Tools
    'photoshop': {
        name: 'Adobe Photoshop',
        category: 'creativity',
        icon: 'image/tool-icons/photoshop.png',
        rating: '4.9/5',
        users: '50M+',
        pricing: 'Paid',
        description: 'Industry-standard software for image editing and graphic design.',
        features: [
            'Advanced photo editing',
            'Layer-based editing',
            'Neural filters',
            'Smart objects',
            'Extensive plugin support'
        ],
        link: 'https://www.adobe.com/products/photoshop.html'
    },
    'figma': {
        name: 'Figma',
        category: 'creativity',
        icon: 'image/tool-icons/figma.png',
        rating: '4.8/5',
        users: '20M+',
        pricing: 'Freemium',
        description: 'Collaborative interface design tool for teams.',
        features: [
            'Real-time collaboration',
            'Component libraries',
            'Auto-layout',
            'Prototyping',
            'Plugin ecosystem'
        ],
        link: 'https://www.figma.com'
    },

    // Writing & Content Tools
    'hemingway': {
        name: 'Hemingway Editor',
        category: 'writing',
        icon: 'image/tool-icons/hemingway.png',
        rating: '4.6/5',
        users: '5M+',
        pricing: 'Free/Paid',
        description: 'Makes your writing bold and clear.',
        features: [
            'Readability analysis',
            'Writing suggestions',
            'Sentence structure',
            'Word choice help',
            'Format export'
        ],
        link: 'https://hemingwayapp.com'
    },

    // Development Tools
    'vscode': {
        name: 'Visual Studio Code',
        category: 'development',
        icon: 'image/tool-icons/vscode.png',
        rating: '4.9/5',
        users: '100M+',
        pricing: 'Free',
        description: 'Powerful and extensible code editor.',
        features: [
            'IntelliSense',
            'Debugging',
            'Git integration',
            'Extensions',
            'Live Share'
        ],
        link: 'https://code.visualstudio.com'
    },

    // Design & Art Tools (15)
    'illustrator': {
        name: 'Adobe Illustrator',
        category: 'creativity',
        icon: 'image/tool-icons/illustrator.png',
        rating: '4.8/5',
        pricing: 'Paid',
        features: ['Vector graphics', 'Logo design', 'Illustration tools']
    },
    'coreldraw': {
        name: 'CorelDRAW',
        category: 'creativity',
        pricing: 'Paid',
        features: ['Vector illustration', 'Page layout', 'Typography tools']
    },
    'inkscape': {
        name: 'Inkscape',
        category: 'creativity',
        pricing: 'Free',
        features: ['Vector graphics', 'Open source', 'Cross-platform']
    },
    'sketch': {
        name: 'Sketch',
        category: 'creativity',
        pricing: 'Paid',
        features: ['UI design', 'Prototyping', 'Collaboration']
    },
    'blender': {
        name: 'Blender',
        category: 'creativity',
        pricing: 'Free',
        features: ['3D modeling', 'Animation', 'Video editing']
    },
    'procreate': {
        name: 'Procreate',
        category: 'creativity',
        pricing: 'Paid',
        features: ['Digital painting', 'iPad exclusive', 'Brush studio']
    },
    'gimp': {
        name: 'GIMP',
        category: 'creativity',
        pricing: 'Free',
        features: ['Photo editing', 'Open source', 'Plugin support']
    },
    'affinity-designer': {
        name: 'Affinity Designer',
        category: 'creativity',
        pricing: 'Paid',
        features: ['Vector graphics', 'Professional tools', 'One-time purchase']
    },
    'krita': {
        name: 'Krita',
        category: 'creativity',
        pricing: 'Free',
        features: ['Digital painting', 'Animation', 'Open source']
    },
    'adobe-xd': {
        name: 'Adobe XD',
        category: 'creativity',
        pricing: 'Paid',
        features: ['UI/UX design', 'Prototyping', 'Adobe integration']
    },
    'vectornator': {
        name: 'Vectornator',
        category: 'creativity',
        pricing: 'Free',
        features: ['Vector design', 'iOS/macOS', 'Professional tools']
    },
    'davinci-resolve': {
        name: 'DaVinci Resolve',
        category: 'creativity',
        pricing: 'Freemium',
        features: ['Video editing', 'Color correction', 'Visual effects']
    },

    // Writing & Content Tools (15)
    'grammarly': {
        name: 'Grammarly',
        category: 'writing',
        pricing: 'Freemium',
        features: ['Grammar checking', 'Style suggestions', 'Plagiarism detection']
    },
    // Add remaining writing tools...

    // Development Tools (15)
    'vscode': {
        name: 'Visual Studio Code',
        category: 'development',
        pricing: 'Free',
        features: ['Code editing', 'Extensions', 'Debugging']
    },
    // Add remaining development tools...

    // Productivity Tools (15)
    'trello': {
        name: 'Trello',
        category: 'productivity',
        pricing: 'Freemium',
        features: ['Task management', 'Collaboration', 'Customization']
    },
    // Add remaining productivity tools...

    // Research & Study Tools (15)
    'google-scholar': {
        name: 'Google Scholar',
        category: 'research',
        pricing: 'Free',
        features: ['Academic search', 'Citation tracking', 'Library links']
    },
    // Add remaining research tools...

    // Audio & Video Tools (15)
    'premiere-pro': {
        name: 'Adobe Premiere Pro',
        category: 'audio',
        pricing: 'Paid',
        features: ['Video editing', 'Audio editing', 'Effects']
    },

    // Additional Design & Creativity Tools
    'stable-diffusion': {
        name: 'Stable Diffusion',
        category: 'creativity',
        icon: 'image/tool-icons/stable-diffusion.png',
        rating: '4.8/5',
        users: '15M+',
        pricing: 'Free/Paid',
        description: 'Open-source AI image generation model that creates stunning artwork from text descriptions.',
        features: [
            'Text-to-image generation',
            'Image-to-image editing',
            'Inpainting and outpainting',
            'Multiple model support',
            'Local installation option'
        ],
        useCases: [
            'Digital art creation',
            'Concept visualization',
            'Product mockups',
            'Game asset creation',
            'Creative inspiration'
        ],
        link: 'https://stabilityai.com'
    },
    'leonardo-ai': {
        name: 'Leonardo.ai',
        category: 'creativity',
        icon: 'image/tool-icons/leonardo.png',
        rating: '4.7/5',
        users: '5M+',
        pricing: 'Freemium',
        description: 'AI-powered creative suite for generating and editing images with advanced control.',
        features: [
            'Custom model training',
            'Batch generation',
            'Style consistency',
            'Asset library',
            'API access'
        ],
        link: 'https://leonardo.ai'
    },

    // Additional Writing & Content Tools
    'jasper': {
        name: 'Jasper',
        category: 'writing',
        icon: 'image/tool-icons/jasper.png',
        rating: '4.8/5',
        users: '8M+',
        pricing: 'Paid',
        description: 'AI writing assistant for marketing and content creation.',
        features: [
            'Blog post writing',
            'Marketing copy',
            'SEO optimization',
            'Multi-language support',
            'Team collaboration'
        ],
        link: 'https://jasper.ai'
    },
    'wordtune': {
        name: 'Wordtune',
        category: 'writing',
        icon: 'image/tool-icons/wordtune.png',
        rating: '4.6/5',
        users: '3M+',
        pricing: 'Freemium',
        description: 'AI writing companion that helps rephrase and improve your writing.',
        features: [
            'Sentence rewriting',
            'Tone adjustment',
            'Length control',
            'Grammar checking',
            'Browser extension'
        ],
        link: 'https://www.wordtune.com'
    },

    // Additional Development Tools
    'tabnine': {
        name: 'Tabnine',
        category: 'development',
        icon: 'image/tool-icons/tabnine.png',
        rating: '4.7/5',
        users: '2M+',
        pricing: 'Freemium',
        description: 'AI code completion tool supporting multiple programming languages.',
        features: [
            'Code completion',
            'Multiple IDE support',
            'Team collaboration',
            'Custom models',
            'Privacy focus'
        ],
        link: 'https://www.tabnine.com'
    },

    // Additional Research Tools
    'elicit': {
        name: 'Elicit',
        category: 'research',
        icon: 'image/tool-icons/elicit.png',
        rating: '4.6/5',
        users: '1M+',
        pricing: 'Free',
        description: 'AI research assistant that helps with literature review and research synthesis.',
        features: [
            'Paper summaries',
            'Research analysis',
            'Citation management',
            'Question answering',
            'Study comparison'
        ],
        link: 'https://elicit.org'
    },

    // Additional Audio & Video Tools
    'synthesia': {
        name: 'Synthesia',
        category: 'audio',
        icon: 'image/tool-icons/synthesia.png',
        rating: '4.8/5',
        users: '2M+',
        pricing: 'Paid',
        description: 'AI video generation platform for creating professional videos with virtual presenters.',
        features: [
            'AI avatars',
            'Text to video',
            'Multiple languages',
            'Custom backgrounds',
            'Script templates'
        ],
        link: 'https://www.synthesia.io'
    },

    // Additional Design & Creativity Tools
    'figma-ai': {
        name: 'Figma AI',
        category: 'creativity',
        icon: 'image/tool-icons/figma-ai.png',
        rating: '4.8/5',
        users: '12M+',
        pricing: 'Freemium',
        description: 'AI-powered design features integrated into Figma.',
        features: [
            'Auto-layout suggestions',
            'Design variations',
            'Component recommendations',
            'Accessibility checks',
            'Design system automation'
        ],
        link: 'https://www.figma.com'
    },

    'dall-e': {
        name: 'DALL-E',
        category: 'creativity',
        icon: 'image/tool-icons/dall-e.png',
        rating: '4.9/5',
        users: '20M+',
        pricing: 'Paid',
        description: 'Create realistic images and art from natural language descriptions.',
        features: [
            'Text to image generation',
            'Image variations',
            'Image editing',
            'High resolution output',
            'Commercial usage rights'
        ],
        link: 'https://openai.com/dall-e-2'
    },

    'photoshop-ai': {
        name: 'Photoshop AI',
        category: 'creativity',
        icon: 'image/tool-icons/photoshop-ai.png',
        rating: '4.8/5',
        users: '15M+',
        pricing: 'Paid',
        description: 'AI-powered photo editing and manipulation tools.',
        features: [
            'Neural filters',
            'Sky replacement',
            'Object selection',
            'Content-aware fill',
            'Style transfer'
        ],
        link: 'https://www.adobe.com/products/photoshop'
    },

    // Additional Writing & Content Tools
    'claude': {
        name: 'Claude AI',
        category: 'writing',
        icon: 'image/tool-icons/claude.png',
        rating: '4.8/5',
        users: '5M+',
        pricing: 'Freemium',
        description: 'Advanced AI writing assistant with deep analysis capabilities.',
        features: [
            'Long-form content',
            'Code analysis',
            'Research assistance',
            'Document analysis',
            'Multi-language support'
        ],
        link: 'https://anthropic.com/claude'
    },

    'writesonic': {
        name: 'Writesonic',
        category: 'writing',
        icon: 'image/tool-icons/writesonic.png',
        rating: '4.7/5',
        users: '3M+',
        pricing: 'Freemium',
        description: 'AI content writer for marketing and business.',
        features: [
            'Article writing',
            'Product descriptions',
            'Ad copy generation',
            'Email writing',
            'SEO optimization'
        ],
        link: 'https://writesonic.com'
    },

    'copyai': {
        name: 'Copy.ai',
        category: 'writing',
        icon: 'image/tool-icons/copyai.png',
        rating: '4.7/5',
        users: '2M+',
        pricing: 'Freemium',
        description: 'AI copywriting tool for marketing and sales.',
        features: [
            'Marketing copy',
            'Social media content',
            'Email templates',
            'Blog ideas',
            'Product descriptions'
        ],
        link: 'https://www.copy.ai'
    },

    // Additional Development Tools
    'amazon-codewhisperer': {
        name: 'Amazon CodeWhisperer',
        category: 'development',
        icon: 'image/tool-icons/codewhisperer.png',
        rating: '4.6/5',
        users: '1M+',
        pricing: 'Freemium',
        description: 'AI code suggestions powered by Amazon.',
        features: [
            'Code completion',
            'Security scanning',
            'AWS integration',
            'Multiple languages',
            'Best practices'
        ],
        link: 'https://aws.amazon.com/codewhisperer'
    },

    'cursor': {
        name: 'Cursor',
        category: 'development',
        icon: 'image/tool-icons/cursor.png',
        rating: '4.7/5',
        users: '500K+',
        pricing: 'Free',
        description: 'AI-first code editor with powerful features.',
        features: [
            'Code generation',
            'Code explanation',
            'Refactoring',
            'Chat interface',
            'Git integration'
        ],
        link: 'https://cursor.sh'
    },

    'replit-ghost': {
        name: 'Replit Ghost',
        category: 'development',
        icon: 'image/tool-icons/replit.png',
        rating: '4.6/5',
        users: '2M+',
        pricing: 'Freemium',
        description: 'AI pair programmer in your browser.',
        features: [
            'Code completion',
            'Error explanation',
            'Code generation',
            'Learning assistance',
            'Collaborative coding'
        ],
        link: 'https://replit.com'
    },

    // Additional Research Tools
    'scholarai': {
        name: 'Scholar AI',
        category: 'research',
        icon: 'image/tool-icons/scholarai.png',
        rating: '4.7/5',
        users: '1M+',
        pricing: 'Freemium',
        description: 'AI research assistant for academic papers.',
        features: [
            'Paper summaries',
            'Citation management',
            'Research insights',
            'Literature review',
            'Bibliography generation'
        ],
        link: 'https://scholarai.io'
    },

    'consensus': {
        name: 'Consensus',
        category: 'research',
        icon: 'image/tool-icons/consensus.png',
        rating: '4.6/5',
        users: '500K+',
        pricing: 'Freemium',
        description: 'AI-powered research paper search engine.',
        features: [
            'Paper search',
            'Key findings extraction',
            'Research synthesis',
            'Citation analysis',
            'Trend identification'
        ],
        link: 'https://consensus.app'
    },

    'scispace': {
        name: 'SciSpace',
        category: 'research',
        icon: 'image/tool-icons/scispace.png',
        rating: '4.7/5',
        users: '2M+',
        pricing: 'Freemium',
        description: 'AI-powered research platform for scientists.',
        features: [
            'Paper discovery',
            'PDF annotation',
            'Reference management',
            'Collaboration tools',
            'Research insights'
        ],
        link: 'https://scispace.com'
    },

    // Additional Audio & Video Tools
    'elevenlabs': {
        name: 'ElevenLabs',
        category: 'audio',
        icon: 'image/tool-icons/elevenlabs.png',
        rating: '4.8/5',
        users: '1M+',
        pricing: 'Freemium',
        description: 'AI voice generation and cloning platform.',
        features: [
            'Voice synthesis',
            'Voice cloning',
            'Multi-language support',
            'Emotion control',
            'API access'
        ],
        link: 'https://elevenlabs.io'
    },

    'runwayml': {
        name: 'RunwayML',
        category: 'audio',
        icon: 'image/tool-icons/runwayml.png',
        rating: '4.7/5',
        users: '2M+',
        pricing: 'Paid',
        description: 'AI-powered video editing and generation.',
        features: [
            'Video generation',
            'Motion tracking',
            'Green screen',
            'Text to video',
            'Video editing'
        ],
        link: 'https://runwayml.com'
    },

    'descript': {
        name: 'Descript',
        category: 'audio',
        icon: 'image/tool-icons/descript.png',
        rating: '4.8/5',
        users: '3M+',
        pricing: 'Freemium',
        description: 'AI-powered audio and video editing platform.',
        features: [
            'Transcription',
            'Voice cloning',
            'Video editing',
            'Podcast editing',
            'Collaboration'
        ],
        link: 'https://www.descript.com'
    }
};

// DOM Elements
const toolSearch = document.getElementById('toolSearch');
const filterButtons = document.querySelectorAll('.filter-btn');
const toolCards = document.querySelectorAll('.tool-card');
const modal = document.getElementById('toolModal');
const closeModal = document.querySelector('.close-modal');
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter tools
        toolCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Search functionality
toolSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    toolCards.forEach(card => {
        const toolName = card.querySelector('h3').textContent.toLowerCase();
        const toolDescription = card.querySelector('p').textContent.toLowerCase();
        
        if (toolName.includes(searchTerm) || toolDescription.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Modal functionality
function openModal(toolId) {
    const tool = toolsData[toolId];
    if (!tool) return;

    const modal = document.getElementById('toolModal');
    const modalContent = modal.querySelector('.modal-content');

    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-tool-icon">
                <img src="${tool.icon || '../image/tool-icons/default.png'}" alt="${tool.name}">
            </div>
            <div class="modal-tool-info">
                <h2>${tool.name}</h2>
                <div class="tool-meta">
                    <span class="pricing-badge ${tool.pricing.toLowerCase()}">${tool.pricing}</span>
                    ${tool.rating ? `<span class="rating"><i class="fas fa-star"></i> ${tool.rating}</span>` : ''}
                    ${tool.users ? `<span class="users"><i class="fas fa-users"></i> ${tool.users}</span>` : ''}
                </div>
            </div>
            <button class="close-modal"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3><i class="fas fa-info-circle"></i> Description</h3>
                <p>${tool.description || 'No description available.'}</p>
            </div>
            
            <div class="modal-section">
                <h3><i class="fas fa-list-ul"></i> Key Features</h3>
                <ul class="feature-list">
                    ${tool.features.map(feature => `
                        <li><i class="fas fa-check-circle"></i> ${feature}</li>
                    `).join('')}
                </ul>
            </div>
            
            ${tool.useCases ? `
                <div class="modal-section">
                    <h3><i class="fas fa-lightbulb"></i> Use Cases</h3>
                    <ul class="use-case-list">
                        ${tool.useCases.map(useCase => `
                            <li><i class="fas fa-angle-right"></i> ${useCase}</li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <div class="modal-section pricing-section">
                <h3><i class="fas fa-tag"></i> Pricing Details</h3>
                <div class="pricing-info">
                    <span class="pricing-badge ${tool.pricing.toLowerCase()}">${tool.pricing}</span>
                    <p>${getPricingDetails(tool.pricing)}</p>
                </div>
            </div>

            <div class="modal-actions">
                <a href="${tool.link}" class="try-tool-btn" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    Try Tool
                </a>
                <button class="bookmark-btn" data-tool="${toolId}">
                    <i class="far fa-bookmark"></i>
                    Save for Later
                </button>
                ${tool.rating ? `
                    <button class="review-btn">
                        <i class="fas fa-star"></i>
                        Write Review
                    </button>
                ` : ''}
            </div>
        </div>
    `;

    // Add event listeners for modal buttons
    const closeBtn = modalContent.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Show modal
    modal.classList.add('active');
}

// Helper function for pricing details
function getPricingDetails(pricing) {
    switch(pricing.toLowerCase()) {
        case 'free':
            return 'This tool is completely free to use with no hidden costs.';
        case 'paid':
            return 'Requires a paid subscription or one-time purchase.';
        case 'freemium':
            return 'Basic features are free, with premium features available for paid users.';
        default:
            return 'Contact provider for pricing details.';
    }
}

learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const toolId = button.dataset.tool;
        openModal(toolId);
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Bookmark functionality
let bookmarkedTools = JSON.parse(localStorage.getItem('bookmarkedTools')) || [];
const bookmarkCount = document.querySelector('.bookmark-count');

function updateBookmarkCount() {
    bookmarkCount.textContent = bookmarkedTools.length;
}

function toggleBookmark(toolId) {
    const index = bookmarkedTools.indexOf(toolId);
    if (index === -1) {
        bookmarkedTools.push(toolId);
    } else {
        bookmarkedTools.splice(index, 1);
    }
    localStorage.setItem('bookmarkedTools', JSON.stringify(bookmarkedTools));
    updateBookmarkCount();
}

// Initialize bookmark count
updateBookmarkCount();

// Add dark mode toggle functionality
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    
    const icon = themeToggle.querySelector('i');
    icon.className = document.body.getAttribute('data-theme') === 'dark' 
        ? 'fas fa-sun' 
        : 'fas fa-moon';
}

// Set initial theme
document.body.setAttribute('data-theme', 
    prefersDarkScheme.matches ? 'dark' : 'light'
);

themeToggle.addEventListener('click', toggleTheme);

// Scroll to Top functionality
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/Hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Share functionality
const shareBtn = document.getElementById('share');
shareBtn.addEventListener('click', async () => {
    try {
        if (navigator.share) {
            await navigator.share({
                title: 'GRACEUP AI Tools Hub',
                text: 'Check out this amazing collection of AI tools!',
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = window.location.href;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            alert('Link copied to clipboard!');
        }
    } catch (err) {
        console.error('Error sharing:', err);
    }
});

// Feedback form
const feedbackBtn = document.getElementById('feedback');
feedbackBtn.addEventListener('click', () => {
    const feedbackModal = document.createElement('div');
    feedbackModal.className = 'modal feedback-modal';
    feedbackModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Send Feedback</h2>
            <form id="feedbackForm">
                <div class="form-group">
                    <label for="feedbackType">Type of Feedback</label>
                    <select id="feedbackType" required>
                        <option value="suggestion">Suggestion</option>
                        <option value="bug">Bug Report</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="feedbackMessage">Your Message</label>
                    <textarea id="feedbackMessage" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Feedback</button>
            </form>
        </div>
    `;
    document.body.appendChild(feedbackModal);
    
    const closeBtn = feedbackModal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(feedbackModal);
    });
    
    const form = feedbackModal.querySelector('#feedbackForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle feedback submission here
        alert('Thank you for your feedback!');
        document.body.removeChild(feedbackModal);
    });
});

// Add these functions to enhance the tool cards functionality

// Function to create tool cards dynamically
function createToolCard(tool) {
    const features = tool.features.slice(0, 3);
    return `
        <div class="tool-card" data-category="${tool.category}">
            <div class="tool-header">
                <div class="tool-icon">
                    <img src="${tool.icon || '../image/tool-icons/default.png'}" alt="${tool.name}">
                </div>
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <div class="tool-meta">
                        <span class="pricing-badge ${tool.pricing.toLowerCase()}">${tool.pricing}</span>
                        ${tool.rating ? `<span class="rating"><i class="fas fa-star"></i> ${tool.rating}</span>` : ''}
                    </div>
                </div>
                <button class="bookmark-btn" data-tool="${tool.id}" title="Bookmark this tool">
                    <i class="far fa-bookmark"></i>
                </button>
            </div>
            <p class="tool-description">${tool.description || 'No description available.'}</p>
            <div class="tool-features">
                ${features.map(feature => `<span class="feature-tag"><i class="fas fa-check-circle"></i> ${feature}</span>`).join('')}
            </div>
            <div class="tool-actions">
                <button class="learn-more-btn" data-tool="${tool.id}">
                    <i class="fas fa-info-circle"></i>
                    Learn More
                </button>
                <a href="${tool.link || '#'}" class="try-tool-btn" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    Try Tool
                </a>
            </div>
        </div>
    `;
}

// Function to render tools by category
function renderToolsByCategory(category) {
    const toolsContainer = document.querySelector(`.tool-category[data-category="${category}"] .tools-container`);
    const tools = Object.entries(toolsData)
        .filter(([_, tool]) => tool.category === category)
        .map(([id, tool]) => ({...tool, id}));
    
    toolsContainer.innerHTML = tools.map(tool => createToolCard({...tool, id: tool.id || tool.name.toLowerCase()})).join('');
}

// Initialize tool cards
function initializeToolCards() {
    const categories = ['creativity', 'development', 'writing', 'research', 'audio'];
    
    categories.forEach(category => {
        const toolsContainer = document.querySelector(`.tool-category[data-category="${category}"] .tools-container`);
        if (!toolsContainer) return;

        const tools = Object.entries(toolsData)
            .filter(([_, tool]) => tool.category === category)
            .map(([id, tool]) => ({...tool, id}));
        
        toolsContainer.innerHTML = tools.map(tool => createToolCard({...tool, id: tool.id || tool.name.toLowerCase()})).join('');
    });

    // Add event listeners to the new buttons
    document.querySelectorAll('.learn-more-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const toolId = btn.dataset.tool;
            openModal(toolId);
        });
    });

    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const toolId = btn.dataset.tool;
            toggleBookmark(toolId);
        });
    });
}

// Add smooth scrolling to category navigation
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        const section = document.querySelector(`.tool-category[data-category="${category}"]`);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeToolCards();
    
    // Add filter button functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterTools(btn.dataset.category);
        });
    });
});

// Add these functions for the new features

// Quick Toolbar functionality
document.querySelectorAll('.toolbar-item').forEach(item => {
    item.addEventListener('click', function() {
        const action = this.querySelector('span').textContent;
        switch(action) {
            case 'Quick Filter':
                // Implement quick filter logic
                break;
            case 'Sort By':
                // Implement sorting logic
                break;
            case 'View Mode':
                // Implement view mode switching
                break;
            case 'Export List':
                // Implement export functionality
                break;
        }
    });
});

// Comparison feature
let selectedTools = [];
const comparisonDrawer = document.getElementById('comparisonDrawer');

function toggleToolComparison(toolId) {
    const index = selectedTools.indexOf(toolId);
    if (index === -1 && selectedTools.length < 3) {
        selectedTools.push(toolId);
    } else if (index !== -1) {
        selectedTools.splice(index, 1);
    }
    updateComparisonDrawer();
}

function updateComparisonDrawer() {
    const selectedCount = document.querySelector('.selected-count');
    const compareBtn = document.querySelector('.compare-btn');
    
    selectedCount.textContent = `${selectedTools.length} selected`;
    compareBtn.disabled = selectedTools.length < 2;
    
    if (selectedTools.length > 0) {
        comparisonDrawer.classList.add('active');
    } else {
        comparisonDrawer.classList.remove('active');
    }
}

// Loading skeleton
function showLoadingSkeleton() {
    const toolsContainer = document.querySelector('.tools-container');
    const skeletonHTML = `
        <div class="tool-card skeleton">
            <div class="tool-header">
                <div class="tool-icon skeleton"></div>
                <div class="tool-info">
                    <h3 class="skeleton"></h3>
                    <div class="tool-meta skeleton"></div>
                </div>
            </div>
            <p class="tool-description skeleton"></p>
            <div class="tool-features skeleton"></div>
            <div class="tool-actions skeleton"></div>
        </div>
    `.repeat(6);
    
    toolsContainer.innerHTML = skeletonHTML;
}

// Add this function to handle filtering
function filterTools(category) {
    const allTools = document.querySelectorAll('.tool-card');
    allTools.forEach(tool => {
        if (category === 'all' || tool.dataset.category === category) {
            tool.style.display = 'block';
        } else {
            tool.style.display = 'none';
        }
    });
}

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.top-tools-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardWidth = 350 + 32; // card width + gap

    function scroll(direction) {
        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
        track.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    prevBtn.addEventListener('click', () => scroll('left'));
    nextBtn.addEventListener('click', () => scroll('right'));

    // Auto scroll
    let scrollInterval;
    const startAutoScroll = () => {
        scrollInterval = setInterval(() => {
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scroll('right');
            }
        }, 5000); // Scroll every 5 seconds
    };

    const stopAutoScroll = () => {
        clearInterval(scrollInterval);
    };

    // Start auto-scroll and handle hover
    startAutoScroll();
    track.addEventListener('mouseenter', stopAutoScroll);
    track.addEventListener('mouseleave', startAutoScroll);
}); 