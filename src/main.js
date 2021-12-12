import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType('petsay/block', {
    title: "Pet say",
    description: "A simple block",
    icon: "admin-site",
    category: "common",
    attributes: {
        message: {
            type: "string",
            default: ""
        },
        pet: {
            type: "string",
            default: "Dog"
        }
    },
    edit: Edit,
    save: Save
});