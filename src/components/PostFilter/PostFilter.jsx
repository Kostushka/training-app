import UiInput from '../UI/UiInput';
import UiSelect from '../UI/UiSelect';
import styles from './PostFilter.module.css';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <>
            <UiInput
                value={filter.search}
                onChange={(e) =>
                    setFilter({ ...filter, search: e.target.value })
                }
                placeholder='Поиск'
            />
            <UiSelect
                value={filter.sort}
                onChange={(sortPost) =>
                    setFilter({ ...filter, sort: sortPost })
                }
                options={[
                    { value: 'name', name: 'По названию' },
                    { value: 'message', name: 'По определению' },
                ]}
                defaultValue='Сортировка'
            />
        </>
    );
};

export default PostFilter;
