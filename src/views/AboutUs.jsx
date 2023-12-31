import React from 'react';
import Page from '../composables/Page';

function AboutUs() {
  return (
    <Page>
      <div className='text-justify'>
        <section className='grid lg:grid-cols-3'>
          <div className='p-6 max-w-s rounded-lg border border-gray-200 shadow-md bg-primary mx-4 mb-4 col-span-1'>
            <p className='text-md text-hb'>
              Pellentesque sagittis egestas ornare. Praesent luctus lorem quam, non convallis diam egestas sed. Morbi laoreet odio id ultrices ornare. Proin mattis convallis sem, vel hendrerit ligula tempus egestas. Suspendisse lorem nulla, scelerisque imperdiet commodo eget, ornare at ligula. Sed vel massa viverra, pulvinar erat sit amet, tristique libero. Donec et elit luctus, mattis augue sit amet, feugiat nisl. Donec vel libero quis lorem faucibus pharetra.
            </p>
          </div>
          <div className='p-6 max-w-s rounded-lg border border-gray-200 shadow-md bg-primary mx-4 mb-4 col-span-1'>
            <p className='text-md text-hb'>
              Nulla non molestie sapien. Vivamus tincidunt libero id risus vulputate, eget pulvinar ex scelerisque. Proin euismod sem elit, ac varius mauris eleifend quis. Donec consectetur tempor ligula ut porttitor. Nam sagittis risus posuere, imperdiet velit nec, scelerisque urna. Nam consectetur dolor sit amet quam lobortis, vitae rhoncus nibh bibendum. Donec in vehicula urna. Donec in venenatis libero. Mauris tempus ex vel viverra auctor.
            </p>
          </div>
          <div className='p-6 max-w-s rounded-lg border border-gray-200 shadow-md bg-primary mx-4 mb-4 col-span-1'>
            <p className='text-md text-hb'>
              Quisque scelerisque suscipit risus, eget condimentum augue dapibus sed. Cras vitae sagittis metus. Cras vel neque gravida, suscipit est eget, iaculis lectus. Praesent lobortis, nisi ac sagittis lobortis, mauris lorem iaculis ligula, vitae placerat dui leo at sapien. Pellentesque ac vehicula ipsum. Sed quis sagittis ipsum. Aenean scelerisque mattis lacus, sit amet egestas quam finibus at. Donec vel quam felis. Donec suscipit ex vel libero aliquet ornare. Vivamus finibus dui vitae dignissim bibendum.
            </p>
          </div>
        </section>
        <section className=' lg:flex lg:justify-between'>
          <div className='p-6 max-w-s rounded-lg border border-gray-200 shadow-md bg-primary mx-4 mb-4 col-span-1'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </div>
          <div className='p-6 max-w-s rounded-lg border border-gray-200 shadow-md bg-primary mx-4 mb-4 col-span-1'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </div>
        </section>
      </div>
    </Page>
  );
}

export default AboutUs;