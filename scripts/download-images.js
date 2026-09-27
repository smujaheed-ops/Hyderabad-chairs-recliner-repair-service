import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urls = {
  'profile.jpg': 'https://lh3.googleusercontent.com/aida/AEtjO1USNc_2-8vwKGblorojCSePjeOZs8IBsvPaiFlB-j6WJDNei4XVLy8cJ5aopZ5Ux_dumETdZzVDHKaZqUQ1fiFveIwASoNwwGPMGo8gOkJ8dbZ4-B-cfbrZur9TrzwUYXDm3O1aAwh5jPxCpcYsNoxQ00zICpTAuuGAKSJsAV2YNSnPpg2KNxAuSjdQ1X4DOit3RJPuxZN9KIyVkiawXWD6XkJIJ5eLdITe-SScNtU0JbYkAN8Y8IKZm2bhQ0wTZZpYHmt84P7zIg',
  'executive-chair.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA5kO0Gyww3LZ_Rev06cmP7UCHxnhrffzBEii8FczFlouQinGvPtjbOMHFHLyCdeJTfBMogi4WdIzF0SJvV_5eYpFg8yKu-UoKIBjUx_5WhwnkXRDnPqDN6xw1_dyBWkPTdOmGzxpBTUhC4lg9DN1yEDqQvlNIc8OqM-lDKv9j2rZfRg4GVbH2z6gUbKRomg4RH9bymvqgMXtjODiiWZb5FKZsxLyVuXOnWMPhQbXyyDasidXr0cu0loLPiPLUmQU1WuQ',
  'mesh-chair.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9_TsKQMgg63Q2yGcaMTtSQAipCTJvewqZAoI-7QS0-nSlSR2S4joGG1rByv3ImybMeleTNSXsTPBKy6-79TwiQ_8aB5zFJDby9UKK3ddruZsLG7Aw52Ng6hOi5yYzPTa-JEboEkjUY2utn323qAcWuagjAfBwLGaxp97OhHd1ebfLmv4nYrY3qT7l4fmhK-BCC4n649GKWsw6RIhHDIBYTdTkhUo-aEjdXFAHvGwHlro9pw0ws3j_2zV0axBCWS7b3nc',
  'boardroom-chair.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcwp-yEjgKXb0L926Rt5Opo3hFVczSd7nkgO-Hjx_J8AXgpZpq9gvn1xSyYYeE9FzQS0TNunNh3D-lOCcZmSv5sqbP9pur8IKGqK11g6qYdaBI35ze1RJ7fH4Z9yYnEUWxvlSuh3gFRWNZS8JZ93g3q2I77w_xpUe30xOOvCqfc_0_eIPwUxYNko_ErLfafj1AFMgEcSX4-8whELZn-xgMSwlH1-2IxxZaxQTt39rQxC42U5OXW8jm6mXWza81yjtb7-8',
  'workstation-chair.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxRL5FK_8WtXj-as8HuMuprmKla7zBVKmaPRH7npK7pNpUpuKae-S3y_vNOj2jcgSQWan4APnuUX48nTnSIxYhXgduCSYhnfFcT7piyvDYgY8ip2DmY-bB6fTMTsQCGutWJTPwIIIt1eyaUPqCgK6xuHhxzaLmsEwvYjmlXsHKmBFwI4m4kfKfdQSReh9WRq1Y8Bs6vB497lFUiDyflUDj9vT_TKoXJajoLndYhBvFyXaEPmM0uplHroW_avvkzzGp-1M',
  'gaming-chair.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIzK9vhEtywPS65mhzPNSy7MJBE87q8tuupSv4XioYs5vHnWljnHgAHkXm8w6iCk6uYqWSFfiYb_gFNCgfZlZoc4t2gmWNu7uIclFL2cd4oQX-4SFTA2EbC2AShV6qvW4Q55eQyZYk72z--PNE9_RqQmAl9Pkfs_BOW3BXjXRcwjUxb48laJyL6V7rXQGUtDuk3p5J3y0VeSIcTFRKxn9ntoDdSLwzMOwpjAYMIRcJVAs3djx7d5_B9D0jgw50P9pDSx8',
  'visitor-chair.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP1INH2DA4HDXh5pqVS1avaSHWhc2DCKnfBRYOmRsyEdsekIkHSKPLU1Y_yD5fKZGxRvte6YBNPuvRVAut6N9eoEY0wzp5siWHPXe2S4gC-m_3xH2sWQ7PvJ8WkZdSAyj0JZGR5Trjeu1DRqbgN-GwBpaaNtRSMaFgaBgybjzEeQCNSCS5eqfVse_c0QkPisGFVNljsq6XcQoRfUyPW_BBCdA6wYUNhUrt2iIQ78Fo1E7bTJmRhrFoo8-xVAPbWeWuzYc'
};

const targetDir = path.resolve(__dirname, '../public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(filename, url) {
  return new Promise((resolve) => {
    const filePath = path.join(targetDir, filename);
    const file = fs.createWriteStream(filePath);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Saved ${filename}`);
          resolve(true);
        });
      } else {
        console.error(`Status ${res.statusCode} for ${filename}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${filename}: ${err.message}`);
      resolve(false);
    });
  });
}

for (const [filename, url] of Object.entries(urls)) {
  await download(filename, url);
}
console.log('Finished image downloads');
