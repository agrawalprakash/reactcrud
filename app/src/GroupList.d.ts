import * as React from 'react';
declare class GroupList extends React.Component {
    state: {
        isLoading: boolean;
        groups: any[];
    };
    constructor(props: any);
    componentDidMount(): void;
    remove(id: any): Promise<void>;
    render(): JSX.Element;
}
export default GroupList;
