import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.css';
import KnittingTools from '../../assets/knitting-tools.png';
import FreeKnittingPatterns from '../../assets/free-knitting-patterns.png';
import DroppedStitches from '../../assets/dropped-stitches.png';
import BudgetYarn from '../../assets/budget-yarn.png';
import StressReliever from '../../assets/stress-reliever.png';
import ChristmasKnitting from '../../assets/christmas-knitting.png';

const BlogDetail = () => {
  const { id } = useParams(); 
  
  const blogPosts = [
    {
      id: 1,
      title: 'Knitting for Beginners: Tools You Need to Start',
      content: `
         <div class="blog-post">
          <h1>Knitting for Beginners: Tools You Need to Start</h1>
          <p>
            Knitting is a relaxing and creative hobby that has been enjoyed for centuries. Whether you're looking to make a cozy scarf or a stylish sweater, getting started with knitting requires just a few essential tools. In this guide, we’ll break down the must-have items every beginner needs and tips for choosing the best ones.
          </p>
          <h2>1. Knitting Needles</h2>
          <ul>
            <li><strong>Material:</strong>
              <ul>
                <li><strong>Metal needles:</strong> Smooth and durable, great for faster knitting.</li>
                <li><strong>Wooden or bamboo needles:</strong> Perfect for beginners as they offer better grip and control.</li>
                <li><strong>Plastic needles:</strong> Lightweight and budget-friendly.</li>
              </ul>
            </li>
            <li><strong>Size:</strong> Start with a medium size, such as US 8 (5mm) needles. This size works well with most yarns and is ideal for beginners.</li>
            <li><strong>Type:</strong>
              <ul>
                <li><strong>Straight needles:</strong> Best for flat projects like scarves.</li>
                <li><strong>Circular needles:</strong> Versatile and great for larger projects like blankets.</li>
              </ul>
            </li>
          </ul>
          <h2>2. Yarn</h2>
          <ul>
            <li><strong>Weight:</strong> Medium-weight yarn (worsted weight) is ideal for beginners.</li>
            <li><strong>Material:</strong>
              <ul>
                <li><strong>Acrylic:</strong> Affordable and easy to care for.</li>
                <li><strong>Wool:</strong> Warm and stretchy, but requires more care.</li>
                <li><strong>Cotton:</strong> Durable and great for summer projects.</li>
              </ul>
            </li>
            <li><strong>Color:</strong> Light colors make it easier to see your stitches, which is helpful for beginners.</li>
          </ul>
          <h2>3. Scissors</h2>
          <p>A small, sharp pair of scissors will help you cut yarn neatly. Opt for craft scissors or embroidery scissors for precision.</p>
          <h2>4. Tapestry Needle</h2>
          <p>Used to weave in yarn ends and sew pieces together. Choose one with a large eye to make threading yarn easier.</p>
          <h2>5. Stitch Markers</h2>
          <p>Stitch markers are small rings that help you keep track of your place in a pattern. They’re particularly useful for counting stitches or marking the beginning of a round.</p>
          <h2>6. Measuring Tape</h2>
          <p>A flexible measuring tape ensures your project meets the correct dimensions. It’s especially important for garments and other sized projects.</p>
          <h2>7. Row Counter</h2>
          <p>A row counter helps you track how many rows you’ve completed, which is crucial for following patterns accurately. Many counters attach to your knitting needles or can be worn as a ring.</p>
          <h2>Bonus Tip: Starter Kits</h2>
          <p>If you’re feeling overwhelmed by all the tools, consider a knitting starter kit. These kits often include needles, yarn, and other essentials to help you get started easily.</p>
          <h2>Practice Makes Perfect</h2>
          <p>
            Once you have your tools, begin with simple projects like:
            <ul>
              <li>A garter stitch scarf (just knit every stitch!)</li>
              <li>A dishcloth using basic knit and purl stitches.</li>
            </ul>
            These projects will help you build confidence and improve your skills. Remember, mistakes are part of the learning process, so don’t be afraid to experiment and have fun!
          </p>
          <h2>Happy Knitting! 🧶</h2>
        </div>        
      `,
      image: KnittingTools,
    },
    {
      id: 2,
      title: '10 Free Knitting Patterns for Beginners',
      content: `
         <div class="blog-post">
          <h1>10 Free Knitting Patterns for Beginners</h1>
          <p>
            Knitting is a wonderful hobby combining creativity, relaxation, and the joy of making something with your hands. Finding the right patterns can be overwhelming if you're new to knitting. That’s why we’ve curated this list of 10 free knitting patterns perfect for beginners. These patterns are simple, fun, and will help you build confidence in your skills while creating beautiful items.
          </p>

          <h2>1. Basic Knit Scarf</h2>
          <p>
            A scarf is a classic beginner project. This pattern uses only the knit stitch, so it’s perfect for practising your technique. Choose a chunky yarn for a cosy and quick result.
          </p>
          <h2>2. Garter Stitch Dishcloth</h2>
          <p>
            Dishcloths are small, practical projects that help you master the garter stitch. Plus, they make great gifts!
          </p>
          <h2>3. Simple Baby Blanket</h2>
          <p>
            This pattern uses only knit stitches to create a soft, squishy baby blanket. It’s a straightforward project that introduces you to working with larger dimensions.
          </p>
          <h2>4. Easy Ribbed Hat</h2>
          <p>
            Learn how to knit in the round with this simple ribbed hat pattern. It’s a great introduction to circular needles and creating stretchy fabric.
          </p>
          <h2>5. Chunky Infinity Scarf</h2>
          <p>
            This beginner-friendly infinity scarf works up quickly and makes a stylish accessory. The pattern alternates between knit and purl stitches, introducing you to basic texture techniques.
          </p>
          <h2>6. Cozy Knit Headband</h2>
          <p>
            A knit headband is a quick project that lets you practice seaming. It’s a fun way to learn while making a cute, wearable accessory.
          </p>
          <h2>7. Stockinette Stitch Pillow Cover</h2>
          <p>
            Create a simple pillow cover using stockinette stitch. This pattern is perfect for learning how to shape and seam knitted pieces.
          </p>
          <h2>8. Knit Mug Cozy</h2>
          <p>
            Add a personal touch to your morning coffee with this easy mug cozy pattern. It’s a small, fast project that’s perfect for beginners.
          </p>
          <h2>9. Beginner Fingerless Mittens</h2>
          <p>
            These fingerless mittens are a great way to learn knitting in the round and shaping. The pattern is straightforward but teaches valuable skills.
          </p>
          <h2>10. Basic Triangle Shawl</h2>
          <p>
            A triangle shawl is a beautiful and rewarding beginner project. This pattern introduces you to increasing stitches and working with larger projects.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Knitting is a skill that grows with every stitch, and these free patterns are a fantastic starting point. Whether you’re making a cosy scarf or a practical dishcloth, each project will build your confidence and creativity. So grab your needles, pick a pattern, and start your knitting journey today!
          </p>
          <h2>Happy knitting! 🧶</h2>
        </div>        
      `,
      image: FreeKnittingPatterns,
    },
    {
      id: 3,
      title: 'How to Avoid Dropped Stitches',
      content: `
        <div class="blog-post">
          <h1>How to Avoid Dropped Stitches</h1>
          <p>
            Dropped stitches can be one of the most frustrating things to deal with when knitting. One moment, you’re happily working away, and the next, a rogue stitch has slipped off your needle, threatening to unravel your hard work. The good news? Dropped stitches are completely preventable with a little know-how and attention. In this post, we’ll share tips and tricks to help you avoid dropped stitches and keep your projects on track.
          </p>

          <h2>What Causes Dropped Stitches?</h2>
          <p>
            Dropped stitches happen when a loop of yarn slips off your needle and isn’t caught in the next row. This can happen for a variety of reasons, such as:
          </p>
          <ul>
            <li>Knitting too quickly</li>
            <li>Loose tension</li>
            <li>Distractions while knitting</li>
            <li>Using slippery needles or yarn</li>
          </ul>
          <p>Understanding why stitches drop is the first step in preventing them.</p>

          <h2>1. Maintain Proper Tension</h2>
          <p>
            Keeping consistent tension in your yarn is key to preventing dropped stitches. If your tension is too loose, stitches are more likely to slip off your needle. Practice holding your yarn comfortably and evenly to ensure each stitch is secure.
          </p>

          <h2>2. Choose the Right Needles</h2>
          <p>
            Slippery needles, like metal ones, can make it easier for stitches to slip off. If you’re a beginner, consider using wooden or bamboo needles, which provide more grip and help keep stitches in place.
          </p>

          <h2>3. Pay Attention While Knitting</h2>
          <p>
            Knitting while watching TV or chatting with friends is fun, but it’s also a common time for mistakes. To avoid dropped stitches, keep an eye on your work and check your stitches regularly.
          </p>

          <h2>4. Use Stitch Markers</h2>
          <p>
            Stitch markers are a great tool for keeping track of your progress and marking pattern repeats. They’re especially useful for projects with complex stitch patterns or a large number of stitches.
          </p>

          <h2>5. Check Your Work Frequently</h2>
          <p>
            It’s much easier to fix a dropped stitch if you catch it early. Pause every few rows to inspect your work and make sure all stitches are on the needle and secure.
          </p>

          <h2>6. Learn to Pick Up Dropped Stitches</h2>
          <p>
            Even with the best precautions, dropped stitches can still happen. Knowing how to pick them up is an essential skill for any knitter. Use a crochet hook to pull the dropped stitch back through the loops of the rows above it and place it back on your needle.
          </p>

          <h2>7. Knit at a Comfortable Speed</h2>
          <p>
            Knitting too quickly can cause you to lose control of your stitches. Take your time, especially when working on intricate patterns or new techniques.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Dropped stitches are a part of every knitter’s journey, but they don’t have to derail your projects. By following these tips and staying mindful while you knit, you can minimize dropped stitches and confidently create beautiful pieces. Remember, practice makes perfect, and every stitch—even the dropped ones—is a step toward becoming a more skilled knitter.
          </p>

          <h2>Happy knitting! 🧶</h2>
        </div>       
        `,
      image: DroppedStitches,
    },
    {
      id: 4,
      title: 'Top 5 Yarn Brands for Budget Crafters',
      content: `
        <div class="blog-post">
          <h1>Top 5 Yarn Brands for Budget Crafters</h1>
          <p>
            If you love crafting but want to stay within a budget, finding affordable and high-quality yarn can feel like a challenge. The good news? Many yarn brands offer excellent options that are gentle on your wallet while delivering the quality you need for your projects. Here are the top five yarn brands perfect for budget-conscious crafters.
          </p>

          <h2>1. Red Heart</h2>
          <p>
            Red Heart is a go-to brand for budget-friendly yarn, known for its wide range of colors and textures. Their yarn is durable, versatile, and widely available, making it an excellent choice for both beginners and seasoned crafters.
          </p>
          <ul>
            <li><strong>Red Heart Super Saver:</strong> Affordable, long-lasting, and available in an extensive color palette.</li>
            <li><strong>Red Heart Soft:</strong> A great option for softer, more luxurious-feeling projects.</li>
          </ul>

          <h2>2. Lion Brand Yarn</h2>
          <p>
            Lion Brand Yarn combines affordability with a wide variety of styles and fibres. From classic acrylics to trendy blends, this brand offers something for every project and budget.
          </p>
          <ul>
            <li><strong>Lion Brand Pound of Love:</strong> A large skein at an affordable price, perfect for big projects like blankets.</li>
            <li><strong>Lion Brand Wool-Ease:</strong> A blend of wool and acrylic that’s soft, warm, and machine washable.</li>
          </ul>

          <h2>3. Caron</h2>
          <p>
            Caron is well-loved for its value-packed skeins and soft yarns. Their products are particularly popular for blankets and large-scale projects, thanks to their generous yardage.
          </p>
          <ul>
            <li><strong>Caron Simply Soft:</strong> True to its name, this yarn is incredibly soft and comes in vibrant colours.</li>
            <li><strong>Caron One Pound:</strong> Great for projects that require a lot of yarn, like sweaters.</li>
          </ul>

          <h2>4. Bernat</h2>
          <p>
            Bernat offers budget-friendly options with a focus on comfort and practicality. Their yarns are especially popular for baby and home projects due to their softness and easy care.
          </p>
          <ul>
            <li><strong>Bernat Blanket Yarn:</strong> A super bulky yarn that’s perfect for quick, cosy projects.</li>
            <li><strong>Bernat Softee Baby:</strong> A lightweight, baby-friendly yarn ideal for delicate projects.</li>
          </ul>

          <h2>5. Hobby Lobby’s I Love This Yarn!</h2>
          <p>
            Hobby Lobby’s in-house brand, I Love This Yarn!, is a favourite among budget-conscious crafters. It offers high-quality yarns at low prices, with a range of colours and textures to suit any project.
          </p>
          <ul>
            <li><strong>I Love This Yarn! Solids:</strong> Soft, easy to work with, and available in hundreds of shades.</li>
            <li><strong>I Love This Cotton!:</strong> An affordable cotton yarn that’s perfect for summer projects or dishcloths.</li>
          </ul>

          <h2>Final Thoughts</h2>
          <p>
            Crafting on a budget doesn’t mean sacrificing quality. These yarn brands offer affordable options that deliver excellent results, whether you’re knitting, crocheting, or weaving. Explore these budget-friendly yarns, and you’ll find the perfect fit for your next project without breaking the bank.
          </p>
          <p>Happy crafting! 🧶</p>
        </div>        
      `,
      image: BudgetYarn,
    },
    {
      id: 5,
      title: 'Why Knitting is the Perfect Stress Reliever',
      content: `
        <div class="blog-post">
          <h1>Why Knitting is the Perfect Stress Reliever</h1>
          <p>
            In today’s fast-paced world, finding effective ways to manage stress is more important than ever. While there are countless options for relaxation, one time-tested activity stands out: knitting. This simple yet deeply rewarding craft has been shown to have incredible benefits for mental health and stress relief. Whether you’re a beginner or a seasoned knitter, here’s why knitting might just be the perfect way to unwind.
          </p>

          <h2>1. Mindful Repetition Calms the Mind</h2>
          <p>
            Knitting involves repetitive movements that engage your hands and focus your attention. This rhythm acts as a form of meditation, helping to quiet a busy mind and reduce anxiety. The steady click of needles and the soft feel of yarn can create a calming sensory experience.
          </p>
          <ul>
            <li><strong>How It Helps:</strong> Encourages mindfulness by keeping you present in the moment.</li>
            <li><strong>Distracts:</strong> Distracts from negative thoughts and worries.</li>
          </ul>

          <h2>2. Knitting Promotes a Sense of Accomplishment</h2>
          <p>
            Completing a knitting project, no matter how small, can boost your mood and give you a sense of achievement. Whether it’s a cozy scarf or a simple dishcloth, seeing your progress in tangible form can be incredibly satisfying.
          </p>
          <ul>
            <li><strong>How It Helps:</strong> Builds confidence as you develop a new skill.</li>
            <li><strong>Provides:</strong> Provides a productive outlet for your energy.</li>
          </ul>

          <h2>3. Engages Both the Mind and Body</h2>
          <p>
            Knitting isn’t just about creating beautiful pieces—it’s also a workout for your brain. As you follow patterns, count stitches, and solve problems, you’re giving your mind a gentle but effective workout. Meanwhile, the physical act of knitting keeps your hands moving, which can help release tension.
          </p>

          <h2>4. Creates a Connection to Others</h2>
          <p>
            Knitting can be a social activity, bringing people together through shared interests. Whether you join a local knitting group or participate in online forums, crafting with others fosters a sense of community and belonging. Sharing tips, ideas, and progress can provide support and encouragement.
          </p>

          <h2>5. Encourages Creativity and Self-Expression</h2>
          <p>
            Knitting allows you to explore your creative side, whether you’re choosing colours, designing patterns, or experimenting with different stitches. This creative freedom can be incredibly fulfilling and helps you express your individuality.
          </p>

          <h2>6. Portable and Accessible</h2>
          <p>
            One of the best things about knitting is that it’s portable and requires minimal equipment. You can knit on the go—on a train, at a park, or during a break at work. Its accessibility makes it a convenient stress reliever that fits into any lifestyle.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Knitting is more than just a hobby; it’s a powerful tool for stress relief and mental well-being. By engaging your mind, calming your body, and fostering creativity, knitting provides a holistic approach to relaxation. Whether you knit alone or with friends, you’ll find that each stitch brings you closer to a calmer, happier you.
          </p>
          <p>Happy knitting! 🧶</p>
        </div>        
      `,
      image: StressReliever,
    },
    {
      id: 6,
      title: '5 Easy Christmas Knitting Projects',
      content: `
        <div class="blog-post">
      <h1>5 Easy Christmas Knitting Projects</h1>
      <p>
        The holiday season is the perfect time to cosy up with your favourite yarn and needles. Whether you’re looking to add a personal touch to your decorations or create heartfelt gifts, these five easy Christmas knitting projects are ideal for spreading holiday cheer. Best of all, they’re beginner-friendly and can be completed in no time!
      </p>

      <h2>1. Festive Knit Stockings</h2>
      <p>
        Nothing says Christmas like a classic knit stocking hanging by the fireplace. With simple patterns and endless customization options, this project is both fun and practical.
      </p>
      <ul>
        <li><strong>Materials:</strong> Worsted weight yarn in holiday colours (red, green, white), Size 8 knitting needles.</li>
        <li><strong>Optional:</strong> Pom-poms or embroidery for personalization.</li>
        <li><strong>Tips:</strong> Stick with a basic stocking pattern if you’re a beginner. Use chunky yarn for a faster, cozier look.</li>
      </ul>

      <h2>2. Chunky Knit Santa Hat</h2>
      <p>
        A Santa hat is a festive accessory that’s easy to knit and loved by everyone. This project uses basic stitches and bulky yarn, making it a quick and satisfying knit.
      </p>
      <ul>
        <li><strong>Materials:</strong> Bulky red yarn, White fluffy or faux fur yarn for the brim, Size 10 circular needles.</li>
        <li><strong>Tips:</strong> Add a pom-pom on top for an extra festive touch. Adjust the size to fit kids or adults.</li>
      </ul>

      <h2>3. Knitted Christmas Ornaments</h2>
      <p>
        Tiny knit ornaments are adorable and can be used to decorate your tree, gift packages, or even a festive garland. Try knitting miniature hats, mittens, or stars.
      </p>
      <ul>
        <li><strong>Materials:</strong> DK or worsted-weight yarn, Size 4 knitting needles.</li>
        <li><strong>Optional:</strong> Small bells or beads for embellishments.</li>
        <li><strong>Tips:</strong> These projects are great for using up leftover yarn. Experiment with different colours and textures to make each ornament unique.</li>
      </ul>

      <h2>4. Cozy Holiday Mug Cozies</h2>
      <p>
        A knit mug cozy adds warmth and personality to your favourite holiday drinks. These quick knits make excellent gifts or stocking stuffers.
      </p>
      <ul>
        <li><strong>Materials:</strong> Worsted weight yarn, Size 7 knitting needles, Buttons for closure.</li>
        <li><strong>Tips:</strong> Use a festive cable stitch or colourwork for added charm. Measure your mug before starting to ensure a snug fit.</li>
      </ul>

      <h2>5. Simple Knit Garland</h2>
      <p>
        A knit garland is a festive addition to your holiday decor. You can knit tiny triangles, stars, or even snowflakes and string them together for a handmade touch.
      </p>
      <ul>
        <li><strong>Materials:</strong> Light worsted or fingering weight yarn, Size 6 knitting needles, Twine or ribbon for stringing.</li>
        <li><strong>Tips:</strong> Stick to a single shape or mix and match for variety. Block your pieces for a polished finish.</li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>
        These five easy Christmas knitting projects are perfect for adding a handmade touch to your holiday celebrations. Whether you’re crafting for yourself or creating gifts for loved ones, each project is a fun and rewarding way to spread the joy of the season.
      </p>
      <p>
        So, grab your yarn and needles, and let’s get knitting! Don’t forget to share your creations with us. Happy holidays and happy knitting! 🎄🧶
      </p>
    </div>     
      `,
      image: ChristmasKnitting,
    },
  ];

  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Blog post not found!</div>;
  }

  return (
    <div className="blog-detail">
      <h1>{blogPost.title}</h1>
      <img src={blogPost.image} alt={blogPost.title} />
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: blogPost.content }}
      ></div>
    </div>
  );
};

export default BlogDetail;
