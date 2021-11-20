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
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По определению' },
                ]}
                defaultValue='Сортировка'
            />
        </>
    );
};

export default PostFilter;
