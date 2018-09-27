import { asyncComponent } from 'react-async-component';

export default asyncComponent({
    name: 'HomePage',
    serverMode: 'resolve',
    resolve: async () => {
        const module = await import('./home');
        return module.default;
    },
});
