import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'angular-formly-demo',
  templateUrl: './formly-demo.component.html',
  styleUrls: ['./formly-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyDemoComponent {
  model: any = {
    name: 'Default Name'
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      props: {
        required: true,
        label: 'First Name'
      }
    },
    {
      key: 'lastName',
      type: 'input',
      props: {
        required: true,
        label: 'Last Name'
      }
    },
    {
      key: 'fullName',
      type: 'input',
      props: {
        required: true,
        label: 'Full Name'
      },
      expressions: {
        'model.fullName': 'model.firstName + " " + model.lastName'
      }
    },
    {
      key: 'isStudent',
      type: 'checkbox',
      props: {
        label: 'I\'m a student'
      }
    },
    {
      key: 'type',
      type: 'select',
      props: {
        placeholder: 'Please select...',
        label: 'School type',
        options: [
          { label: 'Primary School', value: 'Primary School' },
          { label: 'Middle School', value: 'Middle School' },
          { label: 'High School', value: 'High School' },
        ]
      },
      expressions: {
        'props.disabled': '!model.isStudent'
      }
    },
    {
      key: 'school',
      type: 'select',
      props: {
        placeholder: 'Please select...',
        label: 'School',
        options: []
      },
      expressions: {
        'props.options': (field) => {
          const schools = [{ label: 'Primary School 1', value: 'Primary School 1', key: 'Primary School' },
          { label: 'Primary School 2', value: 'Primary School 2', key: 'Primary School' },
          { label: 'Middle School 1', value: 'Middle School 1', key: 'Middle School' },
          { label: 'Middle School 2', value: 'Middle School 2', key: 'Middle School' },
          { label: 'High School 1', value: 'High School 1', key: 'High School' },
          { label: 'High School 2', value: 'High School 2', key: 'High School' }];
          const type = field.model.type;
          if (type) {
            const options = schools.filter(p => p.key == type).map(p => ({ label: p.label, value: p.value }));
            return options;
          }
          return [];
        },
        'props.disabled': '!model.isStudent || !model.type'
      }
    }
  ];
}
