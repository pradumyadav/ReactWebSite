import FourGridItem from './FourGridItem';

export default function FourGrid() {
    return (
        <div className="h-auto py-14 w-full flex flex-col items-center justify-center">
            <div className="w-[85%] h-full grid grid-cols-4 gap-5">
                <FourGridItem
                    title={'Our people & leadership'}
                    description={
                        'We are defined by our people and are deeply committed to creating a diverse and inclsuive culture.'
                    }
                    link={'/about'}
                    linkText={'Meet our leadership'}
                />
                <FourGridItem
                    title={'Purpose, mission & values'}
                    description={
                        'See the guiding principles that inform our long-term strategy as well as how we serve our clients.'
                    }
                    link={'/about'}
                    linkText={'Learn about our values'}
                />
                <FourGridItem
                    title={'Our inspiration'}
                    description={
                        'We help clients pursue sustainability, inclusion, and growth, all at the same time.'
                    }
                    link={'/about'}
                    linkText={'Explore a new kind of growth'}
                />
                <FourGridItem
                    title={'Our governance'}
                    description={
                        'We are a values-driven organization and work to meet the highest professional and ethical standards.'
                    }
                    link={'/about'}
                    linkText={'Learn about our governance'}
                />
            </div>
        </div>
    );
}
