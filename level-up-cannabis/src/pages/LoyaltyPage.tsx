import { Star, Gift, Mail, Trophy, CreditCard, AlertCircle, Users, Percent } from 'lucide-react'

export function LoyaltyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, #FAA007, #E89006)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Star className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Level Up Rewards</h1>
            <p className="text-2xl text-yellow-100 font-semibold mb-6">Rise Higher...Every Time</p>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Earn 6% back on all purchases when spending $20+
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">6%</div>
                <div className="text-yellow-100">Cash Back Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$20</div>
                <div className="text-yellow-100">Minimum Purchase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">FREE</div>
                <div className="text-yellow-100">To Join</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How Level Up Rewards Works</h2>
            <p className="text-xl text-gray-300">Simple. Transparent. Rewarding.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FAA007' }}>
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Sign Up</h3>
              <p className="text-gray-300">
                Join Level Up Rewards with your phone number and email. It's free and takes 30 seconds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#03A558' }}>
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Shop & Earn</h3>
              <p className="text-gray-300">
                Earn 60 points for every $10 you spend (minimum $20 purchase required).
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FAA007' }}>
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Collect Points</h3>
              <p className="text-gray-300">
                Watch your points add up. Every 60 points equals $0.60 in rewards (6% back).
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#03A558' }}>
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">4. Redeem</h3>
              <p className="text-gray-300">
                Use your points toward future purchases. It's like getting money back every time you shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Member Benefits</h2>
            <p className="text-xl text-gray-300">More than just points - enjoy exclusive perks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#FAA007' }}>
                  <Percent className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">6% Cash Back</h3>
                  <p className="text-gray-300">
                    Earn 60 points for every $10 spent (minimum $20 purchase). 60 points = $0.60 toward future purchases.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#03A558' }}>
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Member Returns</h3>
                  <p className="text-gray-300">
                    No receipt required for returns when you're a Level Up Rewards member. We've got your purchase history.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#FAA007' }}>
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Exclusive Monthly Offers</h3>
                  <p className="text-gray-300">
                    Get special deals and promotions delivered to your email. Members-only pricing on select products.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#03A558' }}>
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Automatic Contest Entries</h3>
                  <p className="text-gray-300">
                    Every purchase automatically enters you into monthly contests and giveaways. More spending = more entries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 md:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#FAA007' }}>
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">25% Monthly Accessory Discount</h3>
                  <p className="text-gray-300">
                    Save 25% on cannabis accessories every month. Grinders, papers, storage solutions, and more at member pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points Calculator */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl border border-gray-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Calculate Your Rewards</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-opacity-20 border-2 rounded-2xl p-6" style={{ backgroundColor: 'rgba(250, 160, 7, 0.2)', borderColor: '#FAA007' }}>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#FAA007' }}>$50 Purchase</h3>
                  <div className="text-lg text-gray-300 mb-3">300 Points Earned</div>
                  <div className="text-xl font-semibold" style={{ color: '#03A558' }}>$3.00 Back</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-opacity-20 border-2 rounded-2xl p-6" style={{ backgroundColor: 'rgba(3, 165, 88, 0.2)', borderColor: '#03A558' }}>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#03A558' }}>$100 Purchase</h3>
                  <div className="text-lg text-gray-300 mb-3">600 Points Earned</div>
                  <div className="text-xl font-semibold" style={{ color: '#03A558' }}>$6.00 Back</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-opacity-20 border-2 rounded-2xl p-6" style={{ backgroundColor: 'rgba(250, 160, 7, 0.2)', borderColor: '#FAA007' }}>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#FAA007' }}>$200 Purchase</h3>
                  <div className="text-lg text-gray-300 mb-3">1,200 Points Earned</div>
                  <div className="text-xl font-semibold" style={{ color: '#03A558' }}>$12.00 Back</div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-300 text-lg">
                The more you shop, the more you save. It's that simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, #03A558, #028a4a)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Level Up?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of Calgary cannabis customers who are earning rewards with every purchase.
          </p>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6">Sign Up In Store</h3>
            <div className="space-y-4 text-green-100">
              <p>Visit our Dover location to sign up for Level Up Rewards</p>
              <p>Bring your phone number and email address</p>
              <p>Start earning points on your first purchase!</p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="text-white font-semibold">4022 26 St SE, Calgary, AB</div>
              <div className="text-green-100">Monday to Sunday 10am-10pm</div>
              <div className="text-green-100">(403) 455-0420</div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <div className="flex items-start space-x-3 mb-6">
              <AlertCircle className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#FAA007' }} />
              <h2 className="text-2xl font-semibold text-white">Program Terms & Conditions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Earning Points</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Minimum $20 purchase required to earn points</li>
                  <li>• Earn 60 points for every $10 spent</li>
                  <li>• Points are awarded after completed purchase</li>
                  <li>• Taxes and fees do not earn points</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Redeeming Points</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 60 points = $0.60 in rewards</li>
                  <li>• Cannot redeem on sale items or promotional pricing</li>
                  <li>• Points cannot be combined with other offers</li>
                  <li>• Points have no cash value</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Account Requirements</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Valid phone number and email required</li>
                  <li>• Must be 18+ to participate</li>
                  <li>• One account per person</li>
                  <li>• Account must remain active</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Important Notes</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Points expire after 12 months of inactivity</li>
                  <li>• Program terms subject to change</li>
                  <li>• Level Up Cannabis reserves right to modify program</li>
                  <li>• Fraudulent activity will result in account termination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
